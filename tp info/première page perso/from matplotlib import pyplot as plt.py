from matplotlib import pyplot as plt
from matplotlib.patches import Ellipse

# Création du diagramme des cas d'utilisation
fig, ax = plt.subplots(figsize=(12, 8))
ax.axis("off")

# Définition des éléments de base
actor_positions = {"Utilisateur": (-6, 0), "Système Cloud": (6, 2)}
use_cases = {
    "Détection d'une intrusion": (0, 4),
    "Alerte locale": (0, 2),
    "Notification à distance": (0, 0),
    "Configuration": (0, -2),
    "Activation/Désactivation": (0, -4),
}

# Dessiner les acteurs
for actor, pos in actor_positions.items():
    ax.text(pos[0], pos[1], actor, fontsize=12, ha="center", bbox=dict(facecolor="lightgray", edgecolor="black"))

# Dessiner les cas d'utilisation
for case, pos in use_cases.items():
    ellipse = Ellipse(pos, width=6, height=1.5, edgecolor="blue", facecolor="lightblue", lw=2)
    ax.add_patch(ellipse)
    ax.text(pos[0], pos[1], case, fontsize=10, ha="center", va="center")

# Lignes de connexion pour l'utilisateur
user_links = [
    ("Utilisateur", "Détection d'une intrusion"),
    ("Utilisateur", "Alerte locale"),
    ("Utilisateur", "Notification à distance"),
    ("Utilisateur", "Configuration"),
    ("Utilisateur", "Activation/Désactivation"),
]

for actor, case in user_links:
    start = actor_positions[actor]
    end = use_cases[case]
    ax.annotate("", xy=end, xytext=start, arrowprops=dict(arrowstyle="->", lw=1.5))

# Lignes de connexion pour le cloud
cloud_links = [
    ("Système Cloud", "Notification à distance"),
]

for actor, case in cloud_links:
    start = actor_positions[actor]
    end = use_cases[case]
    ax.annotate("", xy=end, xytext=start, arrowprops=dict(arrowstyle="->", lw=1.5))

# Titre
plt.title("Diagramme des cas d'utilisation - Mini alarme de bureau connecté", fontsize=14)
plt.show()