from django.contrib import admin

# Register your models here.
from .models import User, UserInfo, AdminList, library, AdmissionData, fee, accountDetail, membership, facultyInfo, facultyRoll, studyMaterial, enrollStudent, AttendanceRecord, BookIssue

admin.site.register(User) 
admin.site.register(UserInfo)
admin.site.register(AdminList)
admin.site.register(library)
admin.site.register(AdmissionData)
admin.site.register(fee)
admin.site.register(accountDetail)
admin.site.register(membership)
admin.site.register(facultyInfo)
admin.site.register(facultyRoll)
admin.site.register(studyMaterial)
admin.site.register(enrollStudent)
admin.site.register(AttendanceRecord)
admin.site.register(BookIssue)