from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .models import Games
from .serializers import GamesSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

class GamesViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticated,)

    queryset = Games.objects.all()
    serializer_class = GamesSerializer