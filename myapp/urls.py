from django.urls import path
from .views import UserListCreate, UserDetail, index

urlpatterns = [
    path('', UserListCreate.as_view(), name='user-list-create'),  # Handles GET and POST requests
    path('<int:pk>/', UserDetail.as_view(), name='user-detail'),  # Handles GET, PUT, DELETE requests
    path('index/', index, name='index'),  # Serves index.html
]
