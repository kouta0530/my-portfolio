from django.contrib import admin
from .models import Work, WorkOption
# Register your models here.


class WorkOptionInline(admin.StackedInline):
    model = WorkOption
    extra = 3


class WorkAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Required', {"fields": ['application_name']}),
        ('Optional', {"fields": ['application_description',
                                 'application_picture_url']}),
    )
    inlines = [WorkOptionInline]


admin.site.register(Work, WorkAdmin)
