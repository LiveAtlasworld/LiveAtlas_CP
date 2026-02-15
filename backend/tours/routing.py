
from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    # This regex matches ws://localhost:8000/ws/tours/ROOM_ID/
    re_path(r'ws/tours/(?P<room_id>\w+)/$', consumers.VideoConsumer.as_asgi()),
]