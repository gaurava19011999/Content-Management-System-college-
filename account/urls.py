from django.contrib import admin
from django.urls import path , include
from .import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('signin/',views.signIn,name='signIn'),
    path('signup/',views.signup,name='signup'),
    path('profile',views.profile,name='profile'),
    path('admin_login',views.admin_login,name='admin_login'),
    path('logout', views.logout, name='logout'),
    path('addbook', views.addbook, name='addbook'),
    path('admission', views.Admission, name='admission'),
    path('admission_fee', views.admission_fee, name='admission_fee'),
    path('admission_apl', views.admission_apl, name='admission_apl'),
    path('payFee', views.payFee, name='payFee'),
    path('member',views.member,name='member'),
    path('faculty_profile',views.faculty_profile,name='faculty_profile'),
    path('facultyDetails',views.facultyDetails,name='facultyDetails'),
    path('roll',views.Roll,name='roll'),
    path('facultySubject',views.facultySubject,name='facultySubject'),
    path('facultyUpload',views.facultyUpload,name='facultyUpload'),
    path('studentSubject',views.studentSubject,name='studentSubject'),
    path('enroll',views.enroll,name='enroll'),
    path('attendance',views.attendance,name='attendance'),
    path('takeAttendance',views.takeAttendance,name='takeAttendance'),
    path('studentDetail',views.studentDetail,name='studentDetail'),
    path('issueSearch',views.issueSearch,name='issueSearch'),
    path('returnBook',views.returnBook,name='returnBook'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)