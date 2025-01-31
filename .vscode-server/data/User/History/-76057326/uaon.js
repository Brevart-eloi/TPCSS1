import java.util.Scanner;

public class FactorialSumWithFunction {
    public static void main(String[] args) {
        // Création d'un scanner pour lire l'entrée utilisateur
        Scanner scanner = new Scanner(System.in);

        // Demander à l'utilisateur de saisir un chiffre
        System.out.print("Entrez un nombre entier (N) : ");
        int n = scanner.nextInt();

        // Variable pour stocker le résultat
        int resultat = 0;

        // Boucle pour calculer la somme factorielle (1 + 2 + ... + N)
        for (int i = 1; i <= n; i++) {
            resultat = addition(resultat, i); // Appeler la fonction addition
        }

        // Afficher le résultat dans une alerte (console dans ce cas)
        System.out.println("La somme des nombres de 1 à " + n + " est : " + resultat);

        // Fermer le scanner
        scanner.close();
    }

    // Fonction addition qui retourne la somme de deux nombres
    public static int addition(int val1, int val2) {
        return val1 + val2;
    }
}
