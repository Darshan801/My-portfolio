from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
        password = serializers.CharField(write_only=True, style={'input_type': 'password'})
        class Meta:
            model = User
            fields = ['username','email', 'password']

# validate data automatically validates all fields
        def create(self,validated_data):
            # if we use user.objects.create= it save the password in plain text
            # and User.objects.create_user = automaticlly hash the password
            user=User.objects.create_user(
                validated_data['username'],
                validated_data['email'],
                validated_data['password']
                # validated_data['date']
            )
            # user = User.objects.create_user(**validated_data) only when we got require fields 
            return user