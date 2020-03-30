from django.shortcuts import render
from model_app.models import user

def index(request):
    return render(request,'index.html')

def users(request):
    #Retriving a list of the users
    users_list= user.objects.order_by('first_name')
    user_dict={'user_key':users_list}
    return render(request,'user.html',context=user_dict)

# Create your views here.
