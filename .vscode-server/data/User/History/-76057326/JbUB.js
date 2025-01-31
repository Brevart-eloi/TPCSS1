import javax.swing.JOptionPane;

public static void main(String[] args) {
    // Demander à l'utilisateur de saisir un nombre entier via un prompt
    String input = JOptionPane.showInputDialog("Entrez un nombre entier (N) :");
    int n = Integer.parseInt(input); // Convertir l'entrée en entier

    // Initialiser le résultat
    int resultat = 0;

    // Boucle pour calculer la somme factorielle (1 + 2 + ... + N)
    for (int i = 1; i <= n; i++) {
        resultat = addition(resultat, i); // Appeler la fonction addition
    }

    // Afficher le résultat dans une alerte
    JOptionPane.showMessageDialog(null, "La somme des nombres de 1 à " + n + " est : " + resultat);
}

// Fonction addition qui retourne la somme de deux nombres
public static int addition(int val1, int val2) {
    return val1 + val2;
}
