from django.contrib.auth.models import User, Group
from .models import Games
from rest_framework import serializers

class GamesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Games
        fields = ('idgame', 'name', 'type', 'image', 'platform')

