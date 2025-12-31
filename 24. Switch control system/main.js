// check weather character is vowel or consonant
let ch = prompt(`Enter a Character`).charAt(0);
ch = ch.toLowerCase();
// if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') document.write('Vowel');
// else document.write('Consonant');

// using switch : case, break, default
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write("Vowel");
        break;

    default:
        document.write("Consonant");
}