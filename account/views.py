from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse, Http404
from django.db.models import Sum
import os
from os import path
import datetime
from time import gmtime, strftime
from account.models import User, UserInfo, AdminList, library, AdmissionData, fee, accountDetail, membership, facultyInfo, facultyRoll, studyMaterial, enrollStudent, AttendanceRecord, BookIssue
# Create your views here.

def signIn(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        print(email)
        print(password)

        user = auth.authenticate(email=email, password=password)
       
        print(user)
        if user is not None:
            ck=list(User.objects.filter(email=email).values_list('is_staff'))
            print(ck[0][0])
            if User.objects.filter(email=email, is_staff='False').exists():
                apl = AdmissionData.objects.get(email__iexact=email)
                if apl.approval == True:
            
                    auth.login(request, user)
                    user = request.user
                    if UserInfo.objects.filter(email=user).exists():
                        fees = fee.objects.filter(email=user).values_list('total_fee','paid','remain')
                        acc_details = accountDetail.objects.filter(email=user).values_list('amt','date')
                        info = UserInfo.objects.filter(email=user).values('sem','dept')
                        dept = list(UserInfo.objects.filter(email=user).values_list('dept'))
                        if dept[0][0]=='MCA' or dept[0][0]=='BCA':
                            book = list(library.objects.filter(department = 'IT').values_list('book_name','author','available'))
                        elif dept[0][0]=='MBA' or dept[0][0]=='BBA':
                            book = list(library.objects.filter(department = 'MANAGEMENT').values_list('book_name','author','available'))
                        elif dept[0][0]=='B.com':
                            book = list(library.objects.filter(department = 'COMMERCE').values_list('book_name','author','available'))
                        elif dept[0][0]=='B.pharma' or dept[0][0]=='D.pharma':
                            book = list(library.objects.filter(department = 'PHARMATICAL').values_list('book_name','author','available'))
                        else:
                            book = list(library.objects.filter(department = 'EDUCATION').values_list('book_name','author','available'))
                        print(dept[0][0])
                        print(book)
                        if membership.objects.filter(email = email).exists():
                            mem = 1
                        else:
                            mem = 0
                        sub_detail=UserInfo.objects.filter(email=email).values_list('dept','sem')
                        sub_list=facultyRoll.objects.filter(course=sub_detail[0][0],year=sub_detail[0][1]).values_list('sub')
                        enroll=enrollStudent.objects.filter(email=email).values_list('sub')
                        print(request.user.password)
                        context={
                            'fees':list(fees),
                            'acc_details':list(acc_details),
                            'info':list(info),
                            'book':book,
                            'mem':mem,
                            'sub':list(sub_list),
                            'email':email,
                            'password':password,
                            'enroll':list(enroll),
                            }

                        return render(request,'student.html',context)
                    else:     
                        user=request.user.email
                        print("okokokokoko")
                        print(user)
                        return render(request, 'profile.html')
                else:
                    msg="Admission Not Confirmed"
                    val=1
                    context={
                        'msg':msg,
                        'val':val,
                    }
                    return render(request,'signIn.html',context)
            else:
                auth.login(request, user)
                user = request.user  
                if facultyInfo.objects.filter(email=email).exists():
                    sub = list(facultyRoll.objects.filter(email=email).values_list('course','year','sub'))
                    department=facultyInfo.objects.filter(email=email).values_list('dept')
                    book=library.objects.filter(department=department[0][0]).values()
                    context={
                        'sub':sub,
                        'email':email,
                        'password':password,
                        'book':book,
                    }
                    return render(request,'main_faculty.html',context)
                else:
                    return render(request,'faculty.html')
        
        else:
            msg='Invalid Credentials!'
            val=1
            context={
                'msg':msg,
                'val':val,
            }
            return render(request, 'signIn.html',context)

    return render(request,'signIn.html')

def signup(request):
    if request.method == 'POST':
        email = request.POST['email']
        first_name = request.POST['f_name']
        last_name = request.POST['l_name']
        password1 = request.POST['password']
        password2 = request.POST['c_password']
        # teacher = request.POST['teacher']
        student = request.POST['student']
        
        if password1 == password2:
            if User.objects.filter(email=email).exists():
                msg='email is already in use!'
                val=1
                context={
                    'msg':msg,
                    'val':val,
                }
                return render(request,'signup.html',context)
            else:
                if student == 'on':
                    user = User.objects.create_user(email=email, password=password1, first_name=first_name, last_name=last_name )
                    user.save()
                    msg='Account Created!'
                    val=2
                    context={
                        'msg':msg,
                        'val':val,
                    }
                    return render(request,'signIn.html',context)
                else:
                    user = User.objects.create_user2(email=email, password=password1, first_name=first_name, last_name=last_name )
                    user.save()
                    msg='You are registererd and can log in'
                    val=2
                    context={
                        'msg':msg,
                        'val':val,
                    }
                    return render(request,'signIn.html',context)

        messages.error(request, 'Password does not match')
        msg='Password does not Match!'
        val=1
        context={
            'msg':msg,
            'val':val,
        }
        return render(request,'signup.html',context)
    return render(request, 'signup.html')




@login_required
def profile(request):
    if request.method =='POST':
        image = request.FILES['image1']
        p_house_no = request.POST['p_house_no']
        p_socity = request.POST['p_socity']
        p_landmark = request.POST['p_landmark']
        p_district = request.POST['p_district']
        p_state = request.POST['p_state']
        p_pincode = request.POST['p_pincode']
        t_house_no = request.POST['t_house_no']
        t_socity = request.POST['t_socity']
        t_landmark = request.POST['t_landmark']
        t_district = request.POST['t_district']
        t_state = request.POST['t_state']
        t_pincode = request.POST['t_pincode']
        personal_no = request.POST['personal_no']
        guardian_no = request.POST['guardian_no']
        dob = request.POST['dob']
        gender = request.POST['gender']
        father_f_name = request.POST['father_f_name']
        father_l_name = request.POST['father_l_name']
        mother_f_name = request.POST['mother_f_name']
        mother_l_name = request.POST['mother_l_name']
        dept = request.POST['dept']
        sem = request.POST['sem']
        institute_roll = request.POST['institute_roll']
        university_roll = request.POST['university_roll']
        user = request.user.email
        pass1 = request.user.password
        user_info = UserInfo.objects.create(
            email = user,image=image,p_house_no=p_house_no,p_socity=p_socity,p_landmark=p_landmark,p_district=p_district,
            p_state=p_state,p_pincode=p_pincode,t_house_no=t_house_no,t_socity=t_socity,t_landmark=t_landmark,t_district=t_district,
            t_state=t_state,t_pincode=t_pincode,personal_no=personal_no,guardian_no=guardian_no,dob=dob,gender=gender,father_f_name=father_f_name,father_l_name=father_l_name,
            mother_f_name=mother_f_name,mother_l_name=mother_l_name,dept=dept,sem=sem,institute_roll=institute_roll,university_roll=university_roll
        )
        user_info.save()
        fees = fee.objects.filter(email=user).values_list('total_fee','paid','remain')
        acc_details = accountDetail.objects.filter(email=user).values_list('amt','date')
        info = UserInfo.objects.filter(email=user).values('sem','dept')
        dept = list(UserInfo.objects.filter(email=user).values_list('dept'))
        if dept[0][0]=='MCA' or dept[0][0]=='BCA':
            book = list(library.objects.filter(department = 'IT').values_list('book_name','author','available'))
        elif dept[0][0]=='MBA' or dept[0][0]=='BBA':
            book = list(library.objects.filter(department = 'MANAGEMENT').values_list('book_name','author','available'))
        elif dept[0][0]=='B.com':
            book = list(library.objects.filter(department = 'COMMERCE').values_list('book_name','author','available'))
        elif dept[0][0]=='B.pharma' or dept[0][0]=='D.pharma':
            book = list(library.objects.filter(department = 'PHARMATICAL').values_list('book_name','author','available'))
        else:
            book = list(library.objects.filter(department = 'EDUCATION').values_list('book_name','author','available'))
        print(dept[0][0])
        print(book)
        if membership.objects.filter(email = user).exists():
            mem = 1
        else:
            mem = 0
        sub_detail=UserInfo.objects.filter(email=user).values_list('dept','sem')
        sub_list=facultyRoll.objects.filter(course=sub_detail[0][0],year=sub_detail[0][1]).values_list('sub')
        enroll=enrollStudent.objects.filter(email=user).values_list('sub')
        context={
        'fees':list(fees),
        'acc_details':list(acc_details),
        'info':list(info),
        'book':book,
        'mem':mem,
        'sub':list(sub_list),
        'email':user,
        'password':pass1,
        'enroll':list(enroll),
        }
        return render(request,'student.html', context)





def admin_login(request):
    if request.method =='POST':
        email = request.POST['email']
        password = request.POST['password']
        
        superusers = User.objects.filter(is_superuser=True,email=email).values_list('email')
        print(superusers)
        print(email)
        if User.objects.filter(is_superuser=True,email=email).exists():
            user = auth.authenticate(email=email, password=password)
            if user is not None:
                auth.login(request, user)
                user = request.user
                if email=='admission@gmail.com':
                    
                    return render(request, 'admission.html')
                elif email=='library@gmail.com':
                    avl = library.objects.all().aggregate(Sum('available'))
                    total = library.objects.all().aggregate(Sum('quantity'))
                    issue = library.objects.all().aggregate(Sum('issue'))
                    data = library.objects.all().values_list('book_name','author','quantity','available','issue')
                    context = {
                        'avl' : avl["available__sum"],
                        'total' : total["quantity__sum"],
                        'issue' : issue["issue__sum"],
                        'data' :list(data),
                    }
                    return render(request, 'library.html',context)
                elif email=='account@gmail.com':
                    data_mca = AdmissionData.objects.filter(course__iexact='mca').values_list('email','f_name','l_name','course','reg_amount')
                    data_mba = AdmissionData.objects.filter(course__iexact='mba').values_list('email','f_name','l_name','course','reg_amount')
                    data_bca = AdmissionData.objects.filter(course__iexact='bca').values_list('email','f_name','l_name','course','reg_amount')
                    data_bba = AdmissionData.objects.filter(course__iexact='bba').values_list('email','f_name','l_name','course','reg_amount')
                    data_llb = AdmissionData.objects.filter(course__iexact='llb').values_list('email','f_name','l_name','course','reg_amount')
                    data_bed = AdmissionData.objects.filter(course__iexact='b.ed').values_list('email','f_name','l_name','course','reg_amount')
                    data_bcom = AdmissionData.objects.filter(course__iexact='b.com').values_list('email','f_name','l_name','course','reg_amount')
                    data_ballb = AdmissionData.objects.filter(course__iexact='ba.llb').values_list('email','f_name','l_name','course','reg_amount')
                    data_dpharma = AdmissionData.objects.filter(course__iexact='d.pharma').values_list('email','f_name','l_name','course','reg_amount')
                    data_bpharma = AdmissionData.objects.filter(course__iexact='b.pharma').values_list('email','f_name','l_name','course','reg_amount')
                    fees = list(fee.objects.all().values_list('email','total_fee','paid','remain'))
                    user_account = list(User.objects.all().values_list('email','first_name','last_name'))
                    user_info_account = list(UserInfo.objects.all().values_list('email','dept','sem'))
                    print(fees)

                    context={
                        'data_mca' : list(data_mca),
                        'data_mba' : list(data_mba),
                        'data_bca' : list(data_bca),
                        'data_bba' : list(data_bba),
                        'data_llb' : list(data_llb),
                        'data_bed' : list(data_bed),
                        'data_bcom' : list(data_bcom),
                        'data_ballb' : list(data_ballb),
                        'data_dpharma' : list(data_dpharma),
                        'data_bpharma' : list(data_bpharma),
                        'fees':fees,
                        'user_account':user_account,
                        'user_info_account':user_info_account,
                        'email':email,
                        'password':password,
                    }

                    return render(request, 'account.html',context)
                else :
                    data_mca = AdmissionData.objects.filter(course__iexact='mca').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_mba = AdmissionData.objects.filter(course__iexact='mba').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_bca = AdmissionData.objects.filter(course__iexact='bca').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_bba = AdmissionData.objects.filter(course__iexact='bba').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_llb = AdmissionData.objects.filter(course__iexact='llb').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_bed = AdmissionData.objects.filter(course__iexact='b.ed').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_bcom = AdmissionData.objects.filter(course__iexact='b.com').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_ballb = AdmissionData.objects.filter(course__iexact='ba.llb').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_dpharma = AdmissionData.objects.filter(course__iexact='d.pharma').values_list('email','f_name','l_name','course','reg_amount','approval')
                    data_bpharma = AdmissionData.objects.filter(course__iexact='b.pharma').values_list('email','f_name','l_name','course','reg_amount','approval')
                    fees = list(fee.objects.all().values_list('email','total_fee','paid','remain'))
                    user_account = list(User.objects.all().values_list('email','first_name','last_name'))
                    user_info_account = list(UserInfo.objects.all().values_list('email','dept','sem'))
                    faculty = list(User.objects.filter(is_staff = 'True', is_superuser = 'False').values_list('email','first_name','last_name'))
                    fci=[]
                    for fc in faculty:
                        print(fc[0])
                        fcinfo = list(facultyInfo.objects.filter(email=fc[0]).values_list('email','dept'))
                        fci.append(fcinfo)
                    print(fci)
                    context={
                        'data_mca' : list(data_mca),
                        'data_mba' : list(data_mba),
                        'data_bca' : list(data_bca),
                        'data_bba' : list(data_bba),
                        'data_llb' : list(data_llb),
                        'data_bed' : list(data_bed),
                        'data_bcom' : list(data_bcom),
                        'data_ballb' : list(data_ballb),
                        'data_dpharma' : list(data_dpharma),
                        'data_bpharma' : list(data_bpharma),
                        'fees':fees,
                        'user_account':user_account,
                        'user_info_account':user_info_account,
                        'email':email,
                        'password':password,
                        'faculty':faculty,
                        'fci':fci,
                        'password':password,
                    }
                    return render(request, 'registrar.html',context)
            else:
                msg='Invalid Credentials!'
                val=1
                context={
                    'msg':msg,
                    'val':val,
                }
                return render(request,'index.html',context)
        else:
            msg='Not a Admin!'
            val=1
            context={
                'msg':msg,
                'val':val,
            }
            return render(request,'index.html',context)
    else:
        msg='Post request Not Valid!'
        val=1
        context={
            'msg':msg,
            'val':val,
            }
        return render(request,'index.html',context)
        




@login_required
def logout(request):
    
    auth.logout(request)
   # messages.success(request, 'You are now logged out')
    return redirect('home')

@login_required
def addbook(request):
    if request.method == 'POST':
        book_name = request.POST['book-name']
        author = request.POST['author']
        department = request.POST['department']
        quantity = request.POST['quantity']
        available = quantity
        
        if library.objects.filter(book_name__iexact = book_name).exists():
            old_quantity = library.objects.filter(book_name__iexact = book_name).values('quantity')
            old_avl = library.objects.filter(book_name__iexact = book_name).values('available')
            print(old_quantity[0]['quantity'])
            print(type(int(quantity)))
            book = library.objects.get(book_name__iexact = book_name)
            book.quantity = int(quantity) + old_quantity[0]['quantity']
            book.available = int(available) + old_avl[0]['available']
            book.save()
            avl = library.objects.all().aggregate(Sum('available'))
            total = library.objects.all().aggregate(Sum('quantity'))
            issue = library.objects.all().aggregate(Sum('issue'))

        
                    
            context = {
                'avl' : avl["available__sum"],
                'total' : total["quantity__sum"],
                'issue' : issue["issue__sum"]
            }
            return render(request, 'library.html',context)
        else :
            book = library.objects.create(book_name=book_name,  author=author, department=department, quantity=quantity , available=available, issue="0")
            book.save()
            avl = library.objects.all().aggregate(Sum('available'))
            total = library.objects.all().aggregate(Sum('quantity'))
            issue = library.objects.all().aggregate(Sum('issue'))

        
                    
            context = {
                'avl' : avl["available__sum"],
                'total' : total["quantity__sum"],
                'issue' : issue["issue__sum"]
            }
            return render(request, 'library.html',context)
        # return HttpResponse("this is done")
    else:
        return render(request,'index.html')


def Admission(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        f_name = request.POST.get('f_name')
        l_name = request.POST.get('l_name')
        course = request.POST.get('course')
        fee_amount = request.POST.get('fee_amount')
        new = AdmissionData.objects.create(email=email,f_name=f_name,l_name=l_name,course=course)
        new.save()
        f = fee.objects.create(total_fee=fee_amount,email=email)
        f.save()
        return render(request,'admission.html')
    else:
        return render(request,'index.html')

def admission_fee(request):
    if request.method == 'POST':
        email = request.POST['email']
        course = request.POST['course']
        amount = request.POST['amt']
        print("hello admission is here")
        print(email)
        print(amount)
        
        pay = AdmissionData.objects.get(email=email)
        print(pay)
        pay.reg_amount = amount
        pay.save()
        data_mca = AdmissionData.objects.filter(course__iexact='mca').values_list('email','f_name','l_name','course','reg_amount')
        data_mba = AdmissionData.objects.filter(course__iexact='mba').values_list('email','f_name','l_name','course','reg_amount')
        data_bca = AdmissionData.objects.filter(course__iexact='bca').values_list('email','f_name','l_name','course','reg_amount')
        data_bba = AdmissionData.objects.filter(course__iexact='bba').values_list('email','f_name','l_name','course','reg_amount')
        data_llb = AdmissionData.objects.filter(course__iexact='llb').values_list('email','f_name','l_name','course','reg_amount')
        data_bed = AdmissionData.objects.filter(course__iexact='b.ed').values_list('email','f_name','l_name','course','reg_amount')
        data_bcom = AdmissionData.objects.filter(course__iexact='b.com').values_list('email','f_name','l_name','course','reg_amount')
        data_ballb = AdmissionData.objects.filter(course__iexact='ba.llb').values_list('email','f_name','l_name','course','reg_amount')
        data_dpharma = AdmissionData.objects.filter(course__iexact='d.pharma').values_list('email','f_name','l_name','course','reg_amount')
        data_bpharma = AdmissionData.objects.filter(course__iexact='b.pharma').values_list('email','f_name','l_name','course','reg_amount')
        fees = list(fee.objects.all().values_list('email','total_fee','paid','remain'))
        user_account = list(User.objects.all().values_list('email','first_name','last_name'))
        user_info_account = list(UserInfo.objects.all().values_list('email','dept','sem'))
        print(fees)
        context={
            'data_mca' : list(data_mca),
            'data_mba' : list(data_mba),
            'data_bca' : list(data_bca),
            'data_bba' : list(data_bba),
            'data_llb' : list(data_llb),
            'data_bed' : list(data_bed),
            'data_bcom' : list(data_bcom),
            'data_ballb' : list(data_ballb),
            'data_dpharma' : list(data_dpharma),
            'data_bpharma' : list(data_bpharma),
            'fees':fees,
            'user_account':user_account,
            'user_info_account':user_info_account,
            
            }

        return render(request, 'account.html',context)
    
def admission_apl(request):
    if request.method == 'POST':
        email = request.POST['email']
        

        apl = AdmissionData.objects.get(email__iexact=email)
        print(apl.approval)
        new = apl.approval
        if new == True:
            print("yaha to aa gya")
           
            apl.approval = 'False'
            apl.save()
        else:
            
            apl.approval = 'True'
            apl.save()
        data_mca = AdmissionData.objects.filter(course__iexact='mca').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_mba = AdmissionData.objects.filter(course__iexact='mba').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_bca = AdmissionData.objects.filter(course__iexact='bca').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_bba = AdmissionData.objects.filter(course__iexact='bba').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_llb = AdmissionData.objects.filter(course__iexact='llb').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_bed = AdmissionData.objects.filter(course__iexact='b.ed').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_bcom = AdmissionData.objects.filter(course__iexact='b.com').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_ballb = AdmissionData.objects.filter(course__iexact='ba.llb').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_dpharma = AdmissionData.objects.filter(course__iexact='d.pharma').values_list('email','f_name','l_name','course','reg_amount','approval')
        data_bpharma = AdmissionData.objects.filter(course__iexact='b.pharma').values_list('email','f_name','l_name','course','reg_amount','approval')

        context={
            'data_mca' : list(data_mca),
            'data_mba' : list(data_mba),
            'data_bca' : list(data_bca),
            'data_bba' : list(data_bba),
            'data_llb' : list(data_llb),
            'data_bed' : list(data_bed),
            'data_bcom' : list(data_bcom),
            'data_ballb' : list(data_ballb),
            'data_dpharma' : list(data_dpharma),
            'data_bpharma' : list(data_bpharma),
            }
        return render(request, 'registrar.html',context)
    else:
        return render(request,'index.html')    

def payFee(request):
    if request.method == 'POST':
        student_email = request.POST['student_email']
        course = request.POST['course']
        amt = request.POST['amt']
        total = fee.objects.filter(email=student_email).values('total_fee')
        fe_es = fee.objects.get(email=student_email)
        fe_es.paid = int(amt)
        fe_es.remain = total[0]['total_fee'] - int(amt)
        fe_es.save()
        
        showtime = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        accDetail = accountDetail.objects.create(email=student_email,amt=amt,date=showtime)
        accDetail.save()
        print(total)
        data_mca = AdmissionData.objects.filter(course__iexact='mca').values_list('email','f_name','l_name','course','reg_amount')
        data_mba = AdmissionData.objects.filter(course__iexact='mba').values_list('email','f_name','l_name','course','reg_amount')
        data_bca = AdmissionData.objects.filter(course__iexact='bca').values_list('email','f_name','l_name','course','reg_amount')
        data_bba = AdmissionData.objects.filter(course__iexact='bba').values_list('email','f_name','l_name','course','reg_amount')
        data_llb = AdmissionData.objects.filter(course__iexact='llb').values_list('email','f_name','l_name','course','reg_amount')
        data_bed = AdmissionData.objects.filter(course__iexact='b.ed').values_list('email','f_name','l_name','course','reg_amount')
        data_bcom = AdmissionData.objects.filter(course__iexact='b.com').values_list('email','f_name','l_name','course','reg_amount')
        data_ballb = AdmissionData.objects.filter(course__iexact='ba.llb').values_list('email','f_name','l_name','course','reg_amount')
        data_dpharma = AdmissionData.objects.filter(course__iexact='d.pharma').values_list('email','f_name','l_name','course','reg_amount')
        data_bpharma = AdmissionData.objects.filter(course__iexact='b.pharma').values_list('email','f_name','l_name','course','reg_amount')
        fees = list(fee.objects.all().values_list('email','total_fee','paid','remain'))
        user_account = list(User.objects.all().values_list('email','first_name','last_name'))
        user_info_account = list(UserInfo.objects.all().values_list('email','dept','sem'))
        print(fees)
        context={
            'data_mca' : list(data_mca),
            'data_mba' : list(data_mba),
            'data_bca' : list(data_bca),
            'data_bba' : list(data_bba),
            'data_llb' : list(data_llb),
            'data_bed' : list(data_bed),
            'data_bcom' : list(data_bcom),
            'data_ballb' : list(data_ballb),
            'data_dpharma' : list(data_dpharma),
            'data_bpharma' : list(data_bpharma),
            'fees':fees,
            'user_account':user_account,
            'user_info_account':user_info_account,
            
            }

        return render(request, 'account.html',context)
    

def member(request):
    if request.method=='POST':
        f_name = request.POST['f_name']
        l_name = request.POST['l_name']
        department = request.POST['department']
        email = request.POST['email']

        if membership.objects.filter(email=email).exists():
            avl = library.objects.all().aggregate(Sum('available'))
            total = library.objects.all().aggregate(Sum('quantity'))
            issue = library.objects.all().aggregate(Sum('issue'))
            data = library.objects.all().values_list('book_name','author','quantity')
            data_avl = library.objects.all().values_list('book_name','author','available')
            data_isu = library.objects.all().values_list('book_name','author','issue')
            context = {
                        'avl' : avl["available__sum"],
                        'total' : total["quantity__sum"],
                        'issue' : issue["issue__sum"],
                        'data' :list(data),
                        'data_avl':list(data_avl),
                        'data_isu':list(data_isu)
                    }
            return render(request, 'library.html',context)
        else:
            mem = membership.objects.create(f_name = f_name, l_name=l_name, department=department, email=email)
            mem.save()
            avl = library.objects.all().aggregate(Sum('available'))
            total = library.objects.all().aggregate(Sum('quantity'))
            issue = library.objects.all().aggregate(Sum('issue'))
            data = library.objects.all().values_list('book_name','author','quantity')
            data_avl = library.objects.all().values_list('book_name','author','available')
            data_isu = library.objects.all().values_list('book_name','author','issue')
            context = {
                        'avl' : avl["available__sum"],
                        'total' : total["quantity__sum"],
                        'issue' : issue["issue__sum"],
                        'data' :list(data),
                        'data_avl':list(data_avl),
                        'data_isu':list(data_isu)
                    }
            return render(request, 'library.html',context)
        

def faculty_profile(request):
    if request.method=='POST':
        image = request.FILES['image1']
        p_house_no = request.POST['p_house_no']
        p_socity = request.POST['p_socity']
        p_landmark = request.POST['p_landmark']
        p_district = request.POST['p_district']
        p_state = request.POST['p_state']
        p_pincode = request.POST['p_pincode']
        t_house_no = request.POST['t_house_no']
        t_socity = request.POST['t_socity']
        t_landmark = request.POST['t_landmark']
        t_district = request.POST['t_district']
        t_state = request.POST['t_state']
        t_pincode = request.POST['t_pincode']
        personal_no = request.POST['personal_no']
        dept = request.POST['department']
        id = request.POST['id']

        user = request.user
        faculty = facultyInfo.objects.create(email=user[0],image=image,p_house_no=p_house_no,p_socity=p_socity,p_landmark=p_landmark,p_district=p_district,
            p_state=p_state,p_pincode=p_pincode,t_house_no=t_house_no,t_socity=t_socity,t_landmark=t_landmark,t_district=t_district,
            t_state=t_state,t_pincode=t_pincode,phone_no=personal_no,dept=dept,faculty_id=id)
        faculty.save()

        return render(request,'main_faculty.html')
    
def facultyDetails(request):
    if request.method=="POST":
        details_email = request.POST['detail-email']
        my_email = request.user
        password = request.POST['pass']
        print(details_email)
        faculty = list(User.objects.filter(email=details_email).values_list('first_name','last_name'))
        faculty_info = list(facultyInfo.objects.filter(email=details_email).values_list('image','p_house_no','p_socity','p_landmark','p_district','p_state','p_pincode','phone_no','faculty_id','dept'))
        print(faculty)
        print(faculty_info)
        new_roll = list(facultyRoll.objects.filter(email=details_email).values_list('course','year','sub'))
        context={
            'faculty':faculty,
            'faculty_info':faculty_info,
            'password':password,
            'my_email':my_email,
            'details_email':details_email,
            'new_roll':new_roll,
        
        }
    return render(request,'registrar_facultyDetails.html',context)


def Roll(request):
    details_email = request.GET['email']
    course = request.GET['course']
    year = request.GET['year']
    subject = request.GET['subject']
    password = request.GET['password']
    my_email = request.user
    faculty = list(User.objects.filter(email=details_email).values_list('first_name','last_name'))
    faculty_info = list(facultyInfo.objects.filter(email=details_email).values_list('image','p_house_no','p_socity','p_landmark','p_district','p_state','p_pincode','phone_no','faculty_id','dept'))
    fyroll = facultyRoll.objects.create(email=details_email,course=course,year=year,sub=subject)
    fyroll.save()
    new_roll = list(facultyRoll.objects.filter(email=details_email).values_list('course','year','sub'))
    context={
            'faculty':faculty,
            'faculty_info':faculty_info,
            'password':password,
            'my_email':my_email,
            'details_email':details_email,
            'new_roll':new_roll,
        }

    return render(request, 'registrar_facultyDetails.html',context)


def facultySubject(request):
    if request.method=='POST':
        course=request.POST['course']
        year=request.POST['year']
        sub=request.POST['sub']
        email=request.POST['email']
        password=request.POST['password']
        name1=studyMaterial.objects.filter(sub=sub).values_list('unit','file','id')
        name2=studyMaterial.objects.filter(sub=sub).values('unit','file','id')
        enroll1=enrollStudent.objects.filter(sub=sub).values_list('email')
        enroll=[]
        menroll=[]
        for en in enroll1:
            us=User.objects.filter(email=en[0]).values_list('first_name','last_name','email')
            enroll.append(us[0][0])
            enroll.append(us[0][1])
            enroll.append(us[0][2])
            menroll.append(tuple(enroll))
            enroll=list(enroll)
            enroll.clear()
        l1=[]
        l2=[]
        for f in name1:
            name , extension= path.splitext(f[1])
            l1.append(f[0])
            l1.append(f[1])
            l1.append(f[2])
            l1=tuple(l1)
            l2.append(l1)
            l1=list(l1)
            l1.clear()
        context={
            'course':course,
            'year':year,
            'sub':sub,
            'email':email,
            'password':password,
            'l2':l2,
            'name2':name2,
            'enroll':list(menroll),
            'enroll1':enroll1,
        }
        return render(request,'faculty_subject.html',context)


def facultyUpload(request):
    if request.method=='POST':
        course=request.POST['course']
        year=request.POST['year']
        sub=request.POST['sub']
        unit=request.POST['unit']
        file=request.FILES['file']
        email=request.POST['email']
        password=request.POST['password']
        file2=studyMaterial.objects.create(course=course,year=year,sub=sub,unit=unit,file=file)
        file2.save()
        name1=studyMaterial.objects.filter(sub=sub).values_list('unit','file','id')
        name2=studyMaterial.objects.filter(sub=sub).values('unit','file','id')
        enroll1=enrollStudent.objects.filter(sub=sub).values_list('email')
        enroll=[]
        menroll=[]
        for en in enroll1:
            us=User.objects.filter(email=en[0]).values_list('first_name','last_name','email')
            enroll.append(us[0][0])
            enroll.append(us[0][1])
            enroll.append(us[0][2])
            menroll.append(tuple(enroll))
            enroll=list(enroll)
            enroll.clear()
        l1=[]
        l2=[]
        for f in name1:
            name , extension= path.splitext(f[1])
            l1.append(f[0])
            l1.append(f[1])
            l1.append(f[2])
            l1=tuple(l1)
            l2.append(l1)
            l1=list(l1)
            l1.clear()
        context={
            'course':course,
            'year':year,
            'sub':sub,
            'email':email,
            'password':password,
            'l2':l2,
            'name2':name2,
            'enroll':list(menroll),
            'enroll1':enroll1,
        }
        return render(request,'faculty_subject.html',context)


def to_str(value):
    """converts int to string"""
    return str(value)
def studentSubject(request):
    if request.method=='POST':
        sub=request.POST['sub']
        password=request.POST['password']
        sub_info=facultyRoll.objects.filter(sub=sub).values_list('course','year')
        email=request.user
        email1=to_str(email)
        if enrollStudent.objects.filter(sub=sub,email=email).exists():
            check=1
            name1=studyMaterial.objects.filter(sub=sub).values_list('unit','file','id')
            name2=studyMaterial.objects.filter(sub=sub).values('unit','file','id')
            att=AttendanceRecord.objects.filter(course=sub_info[0][0],year=sub_info[0][1]).values_list()
            count_att=0
            count_ttl=0
            str_list=[]
            print(att)
            for tkatt in att:
                str=tkatt[5]
                count_ttl+=1
                str_list=str.split()
                for st in str_list:
                    if email1 in st:
                        count_att+=1
            per=(count_att/count_ttl)*100
            l1=[]
            l2=[]
            for f in name1:
                name , extension= path.splitext(f[1])
                l1.append(f[0])
                l1.append(f[1])
                l1.append(f[2])
                l1=tuple(l1)
                l2.append(l1)
                l1=list(l1)
                l1.clear()
            context={
            'sub_info':list(sub_info),
            'sub':sub,
            'email':email,
            'password':password,
            'l2':l2,
            'name2':name2,
            'check':check,
            'per':per,
        }
        else:
            check=0
            context={
                'sub_info':list(sub_info),
                'check':check,
                'sub':sub,
                'email':email,
                'password':password,
            }
        return render(request,'student_subject.html',context)
    

def enroll(request):
    if request.method=='POST':
        sub=request.POST['sub']
        password=request.POST['password']
        email=request.POST['email']
        user=request.user
        subInfo=facultyRoll.objects.filter(sub=sub).values_list('course','year')
        if enrollStudent.objects.filter(sub=sub,email=email).exists():
            print("ok")
        else:
            stroll=enrollStudent.objects.create(course=subInfo[0][0],year=subInfo[0][1],sub=sub,email=email)
            stroll.save()
        fees = fee.objects.filter(email=user).values_list('total_fee','paid','remain')
        acc_details = accountDetail.objects.filter(email=user).values_list('amt','date')
        info = UserInfo.objects.filter(email=user).values('sem','dept')
        dept = list(UserInfo.objects.filter(email=user).values_list('dept'))
        if dept[0][0]=='MCA' or dept[0][0]=='BCA':
            book = list(library.objects.filter(department = 'IT').values_list('book_name','author','available'))
        elif dept[0][0]=='MBA' or dept[0][0]=='BBA':
            book = list(library.objects.filter(department = 'MANAGEMENT').values_list('book_name','author','available'))
        elif dept[0][0]=='B.com':
            book = list(library.objects.filter(department = 'COMMERCE').values_list('book_name','author','available'))
        elif dept[0][0]=='B.pharma' or dept[0][0]=='D.pharma':
            book = list(library.objects.filter(department = 'PHARMATICAL').values_list('book_name','author','available'))
        else:
            book = list(library.objects.filter(department = 'EDUCATION').values_list('book_name','author','available'))
        print(dept[0][0])
        print(book)
        if membership.objects.filter(email = user).exists():
            mem = 1
        else:
            mem = 0
        sub_detail=UserInfo.objects.filter(email=user).values_list('dept','sem')
        sub_list=facultyRoll.objects.filter(course=sub_detail[0][0],year=sub_detail[0][1]).values_list('sub')
        print("Hello list is here are you happy now")
        print(sub_list)
        context={
        'fees':list(fees),
        'acc_details':list(acc_details),
        'info':list(info),
        'book':book,
        'mem':mem,
        'sub':list(sub_list),
        'email':email,
        'password':password,
        }

        return render(request,'student.html',context)
    



def attendance(request):
    if request.method=='POST':
        course=request.POST['course']
        year=request.POST['year']
        sub=request.POST['sub']
        password=request.POST['password']
        email=request.user
        student = UserInfo.objects.filter(dept=course,sem=year).values_list('email')
        ATT=AttendanceRecord.objects.filter(course=course,year=year,sub=sub).values_list('date','stName')
        print(student)
        sn=[]
        snmain=[]
        for s in student:
            studentName=User.objects.filter(email=s[0]).values_list('first_name','last_name')
            sn.append(s[0])
            sn.append(studentName[0][0])
            sn.append(studentName[0][1])
            for att in ATT:
                txt=att[1]
                txt2=txt.split()
                if s[0] in txt2:
                    sn.append('P')
                else:
                    sn.append('A')
            snmain.append(tuple(sn))
            sn=list(sn)
            sn.clear()            
        # for s in student:
        #     studentName=User.objects.filter(email=s[0]).values_list('first_name','last_name')
        #     studentName=list(studentName)
        #     sn.append(s[0])
        #     sn.append(studentName[0][0])
        #     sn.append(studentName[0][1])
        #     snmain.append(tuple(sn))
        #     sn=list(sn)
        #     sn.clear()
        #     studentName=''
        print(snmain)
        context={
            'email':email,
            'password':password,
            'course':course,
            'year':year,
            'sub':sub,
            'snmain':snmain,
            'ATT':ATT,
        }

        return render(request,'attendance.html',context)
    


def takeAttendance(request):
    email=request.GET['email']
    course=request.GET['course']
    year=request.GET['year']
    sub=request.GET['sub']
    date=datetime.datetime.now().strftime ("%Y-%m-%d")
    print(email)
    if AttendanceRecord.objects.filter(course=course,year=year,sub=sub,date=date).exists():
        at=AttendanceRecord.objects.filter(course=course,year=year,sub=sub,date=date).get()
        string=at.stName.split()
        count=0
        for s in string:
            if s==email:
               count+=1 
        if count==0:
            at.stName=at.stName+' '+email
            at.save()
    else:
        at=AttendanceRecord.objects.create(course=course,year=year,sub=sub,date=date,stName=email)
        at.save()
    return HttpResponse('Message sent successfully')


def studentDetail(request):
    email=request.GET['email']
    userinfo= UserInfo.objects.filter(email=email).values()
    user=User.objects.filter(email=email).values_list('email','first_name','last_name')
    fees=fee.objects.filter(email=email).values_list('total_fee','paid')
    context={
        'userinfo':userinfo,
        'user':user,
        'fees':fees,
    }
    return render(request,'studentDetail.html',context)

def issueSearch(request):
    name=request.GET['name']
    email=request.GET['email']
    dept=request.GET['department']
    bookDetail=library.objects.filter(book_name=name).values_list('author')
    book=BookIssue.objects.create(book_name=name,author=bookDetail[0][0],dept=dept,email=email)
    book.save()
    avl = library.objects.all().aggregate(Sum('available'))
    total = library.objects.all().aggregate(Sum('quantity'))
    issue = library.objects.all().aggregate(Sum('issue'))
    data = library.objects.all().values_list('book_name','author','quantity','available','issue')
    context = {
    'avl' : avl["available__sum"],
    'total' : total["quantity__sum"],
    'issue' : issue["issue__sum"],
    'data' :list(data),
    }
    return render(request, 'library.html',context)

def returnBook(request):
    name=request.GET['name']
    email=request.GET['email']
    dept=request.GET['department']
    book=BookIssue.objects.filter(book_name=name,email=email)
    book.delete()
    avl = library.objects.all().aggregate(Sum('available'))
    total = library.objects.all().aggregate(Sum('quantity'))
    issue = library.objects.all().aggregate(Sum('issue'))
    data = library.objects.all().values_list('book_name','author','quantity','available','issue')
    context = {
    'avl' : avl["available__sum"],
    'total' : total["quantity__sum"],
    'issue' : issue["issue__sum"],
    'data' :list(data),
    }
    return render(request, 'library.html',context)


# val values meaning
# 1=for red
# 2=for green
# 3=email is already in use!