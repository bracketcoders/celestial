from django.urls import path
from celestialapp import views

urlpatterns = [
    path("notes/", views.ListNotesAPIView.as_view(), name="notes_list"),
    path("notes/create/", views.CreateNotesAPIView.as_view(), name="notes_create"),
    path("notes/update/<int:pk>/", views.UpdateNotesAPIView.as_view(), name="update_notes"),
    path("notes/delete/<int:pk>/", views.DeleteNotesAPIView.as_view(), name="delete_notes")
]
