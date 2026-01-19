from django.urls import path
from api import views
from accounts import views as UseViews

urlpatterns = [
    path('register/',UseViews.RegisterView.as_view()),
]
