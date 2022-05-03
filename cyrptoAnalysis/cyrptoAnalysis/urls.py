from django.contrib import admin
from django.urls import path,include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('analysis.urls')),
    path('analysis/', include('analysis.urls')),
    path('blog/',include('blog.urls')),
]
