from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from django.shortcuts import render

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def index(request):
    return render(request, 'index.html')
