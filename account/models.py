import os
import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                    PermissionsMixin


# Create your models here.

def user_image_file_path(instance, filename):
    """Generates file path for user image"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('uploads/user/image', filename) 

def user_file_path(instance, filename):
    """Generates file path for user image"""
    # ext = filename.split('.')[-1]
    # filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('uploads/user/file', filename) 


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('Email is must required!')
        user = self.model(email=self.normalize_email(email), **extra_fields) 
        user.set_password(password)
        user.save(using=self.db)

        return user 
    
    def create_user2(self, email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('Email is must required!')
        user = self.model(email=self.normalize_email(email), **extra_fields) 
        user.set_password(password)
        user.is_staff = True
        user.save(using=self.db)

        return user 

    def create_superuser(self, email, password):
        """Create a new superuser"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self.db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    email=models.EmailField(max_length=254, unique=True)
    first_name=models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)
    password=models.CharField(max_length=50)
    # view=models.BooleanField()
    is_staff = models.BooleanField(default=False)
    # def __str__(self):
    #     return self.email
    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return '{}'.format(self.email)
    
class UserInfoManager(models.Manager):
    def create_userinfo(self, user, **extra_kwargs):
        user_info = self.model(**extra_kwargs)
        user_info.save(using=self.db)
        
        return user 


class UserInfo(models.Model):
    email = models.EmailField( max_length=254)
    image=models.ImageField(upload_to=user_image_file_path)
    p_house_no=models.IntegerField()
    p_socity=models.CharField(max_length=250)
    p_landmark=models.CharField(max_length=250)
    p_district=models.CharField(max_length=50)
    p_state=models.CharField(max_length=50)
    p_pincode=models.IntegerField()
    t_house_no=models.IntegerField()
    t_socity=models.CharField(max_length=250)
    t_landmark=models.CharField(max_length=250)
    t_district=models.CharField(max_length=50)
    t_state=models.CharField(max_length=50)
    t_pincode=models.IntegerField()
    personal_no=models.IntegerField()
    guardian_no=models.IntegerField()
    dob=models.DateField(max_length=8)
    gender = models.CharField(max_length=255, default='male')
    father_f_name=models.CharField(max_length=50)
    father_l_name=models.CharField(max_length=50)
    mother_f_name=models.CharField(max_length=50)
    mother_l_name=models.CharField(max_length=50)
    dept=models.CharField(max_length=10)
    sem=models.IntegerField()
    institute_roll=models.IntegerField()
    university_roll=models.IntegerField()

    objects = UserInfoManager()
    
    def __str__(self):
        return '{}'.format(self.email)
    

class AdminList(models.Model):
    email = models.EmailField(max_length=250)
    dept = models.CharField(max_length=70)
    

class library(models.Model):
    book_name = models.CharField(max_length=250)
    author = models.CharField(max_length=250)
    department = models.CharField(max_length=250)
    quantity = models.IntegerField()
    available = models.IntegerField(null=True)
    issue = models.IntegerField(null=True)

    def __str__(self):
        return self.book_name
    
class AdmissionData(models.Model):
    email = models.EmailField(max_length=250)
    f_name = models.CharField(max_length=50)
    l_name = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    reg_amount = models.IntegerField(null=True)
    approval = models.BooleanField(default=False)

    def __str__(self) :
        return self.email
    

class fee(models.Model):
    email = models.EmailField( max_length=254)
    total_fee = models.IntegerField(null=True)
    paid = models.IntegerField(null=True)
    remain = models.IntegerField(null=True)

    def __str__(self):
        return '{}'.format(self.email)
    
class accountDetail(models.Model):
    email = models.EmailField(max_length=250)
    amt = models.IntegerField()
    date = models.DateTimeField()

    def __str__(self):
        return '{}'.format(self.email)



class membership(models.Model):
    f_name = models.CharField(max_length=50)
    l_name = models.CharField(max_length=50)
    department = models.CharField(max_length=20)
    email = models.EmailField(max_length=250)

    def __str__(self):
        return '{}'.format(self.email)


class facultyInfo(models.Model):
    email = models.EmailField(max_length=250)
    image=models.ImageField(upload_to=user_image_file_path, null=True)
    p_house_no=models.IntegerField()
    p_socity=models.CharField(max_length=250)
    p_landmark=models.CharField(max_length=250)
    p_district=models.CharField(max_length=50)
    p_state=models.CharField(max_length=50)
    p_pincode=models.IntegerField()
    t_house_no=models.IntegerField()
    t_socity=models.CharField(max_length=250)
    t_landmark=models.CharField(max_length=250)
    t_district=models.CharField(max_length=50)
    t_state=models.CharField(max_length=50)
    t_pincode=models.IntegerField()
    phone_no = models.IntegerField()
    faculty_id = models.IntegerField()
    dept = models.CharField(max_length=50)

    def __str__(self):
        return '{}'.format(self.email)
    
class facultyRoll(models.Model):
    email = models.EmailField(max_length=250)
    course = models.CharField(max_length=50)
    year = models.IntegerField()
    sub = models.CharField(max_length=200)
    def __str__(self):
        return '{}'.format(self.email)


class studyMaterial(models.Model):
    course = models.CharField(max_length=50)
    year = models.IntegerField()
    sub = models.CharField(max_length=200)
    unit = models.IntegerField()
    file = models.FileField(null=True)

    def __str__(self):
        return '{}'.format(self.course)
    

class enrollStudent(models.Model):
    course=models.CharField(max_length=50)
    year=models.IntegerField()
    sub=models.CharField(max_length=200)
    email=models.EmailField(max_length=250)

    def __str__(self):
        return '{}'.format(self.course)
    

class AttendanceRecord(models.Model):
    course=models.CharField(max_length=50, null=True)
    year=models.IntegerField(null=True)
    sub=models.CharField(max_length=200, null=True)
    date=models.DateField()
    stName=models.CharField(max_length=10000)

    def __str__(self):
        return '{}'.format(self.sub)

class BookIssue(models.Model):
    book_name=models.CharField(max_length=250)
    author=models.CharField(max_length=100)
    dept=models.CharField(max_length=50)
    email=models.EmailField(max_length=250)
    def __str__(self):
        return '{}'.format(self.email)