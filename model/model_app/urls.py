from django.urls import path
from model_app import views

urlpatterns=[
    path('',views.users,name='users'),
]
