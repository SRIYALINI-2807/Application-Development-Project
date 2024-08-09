from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('password', 'username')  # Adjust this to show the fields you want
    search_fields = ('username',)  # Add fields to be searchable
