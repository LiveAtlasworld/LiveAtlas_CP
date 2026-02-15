from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from tours import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tours/', views.get_tours),
    path('api/create-tour/', views.create_tour),
    
    # --- THIS LINE IS REQUIRED TO END CALLS ---
    path('api/end-tour/<int:tour_id>/', views.end_tour), 
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)