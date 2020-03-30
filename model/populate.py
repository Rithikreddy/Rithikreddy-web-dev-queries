import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','model.settings')

import django

django.setup() #This is used to go in and populate the database

import random
from model_app.models import user
from faker import Faker

#fakegen is an obkect of Faker
fakegen= Faker()
#This is used to generate random strings which are first_name and last_name
#Then email is generated randomly
def add_users(N=5):
    #default n is 5
    name=fakegen.name().split()
    fake_first_name=name[0]
    fake_last_name=name[1]
    fake_email=fakegen.email()

    #Now adding the users
    #new entry
    new_user=user.objects.get_or_create(first_name=fake_first_name,
                                        last_name=fake_last_name,
                                        email=fake_email)[0]
                                        #This 0 is used to determine the object
                                        #actually after the function call a tuple
                                        #is genearted but to assign object we use [0]
'''The below function is used to test whether the function executed is imported or in the main and it enters if it is in main only'''
if __name__ == '__main__':
    N=20
    print("Entered the function about to create the values")
    add_users(N)
    print("Complete")
'''With this itself the users data is loaded into the django admin but now to add it into the /users we use the templates'''
