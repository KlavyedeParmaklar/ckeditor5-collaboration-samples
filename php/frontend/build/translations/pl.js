(function(d){	const l = d['pl'] = d['pl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"*Change to:* %0":"*Zamień na:* %0","*Check item*":"*Zaznacz*","*Format:* %0":"*Formatowanie:* %0","*Indent:* %0":"*Wcięcie:* %0","*Insert:* %0":"*Wstaw:* %0","*Merge cells*":"","*Merge:* %0":"*Połącz:* %0","*Outdent:* %0":"*Cofnij wcięcie:* %0","*Remove all formatting*":"*Usuń całe formatowanie*","*Remove format:* %0":"*Usuń formatowanie:* %0","*Remove image text alternative*":"*Usuń tekst alternatywny obrazu*","*Remove link*":"*Usuń odnośnik*","*Remove:* %0":"*Usuń:* %0","*Replace table cells*":"","*Reset font background color*":"*Przywróć kolor tła czcionki*","*Reset font color*":"*Przywróć kolor czcionki*","*Reset font family*":"*Przywróć krój czcionki*","*Reset font size*":"*Przywróć wielkość czcionki*","*Reset image width*":"*Przywróć szerokość obrazu*","*Set font background color:* %0":"*Ustaw kolor tła czcionki:* %0","*Set font color:* %0":"*Ustaw kolor czcionki:* %0","*Set font family:* %0":"*Ustaw krój czcionki:* %0","*Set font size:* %0":"*Ustaw wielkość czcionki:* %0","*Set image text alternative:* %0":"*Ustaw tekst alternatywny obrazu:* %0","*Set image width:* %0":"*Ustaw szerokość obrazu:* %0","*Set link:* %0":"*Ustaw odnośnik:* %0","*Split cell:* horizontally":"*Podziel komórkę:* poziomo","*Split cell:* vertically":"*Podziel komórkę:* pionowo","*Split:* %0":"*Podziel:* %0","*Uncheck item*":"*Odznacz*","%0 of %1":"%0 z %1","Accept all selected suggestions":"Zatwierdź wszystkie zaznaczone zmiany","Accept all suggestions":"Zatwierdź wszystkie zmiany","Accept suggestion":"Zatwierdź zmianę","Align center":"Wyrównaj do środka","Align left":"Wyrównaj do lewej","Align right":"Wyrównaj do prawej",Anonymous:"Anonimowy",Aquamarine:"Akwamaryna","Are you sure?":"Jesteś pewny/pewna?",Big:"Duży",Black:"Czarny","Block quote":"Cytat blokowy",Blue:"Niebieski",Bold:"Pogrubienie","Bulleted List":"Lista wypunktowana",Cancel:"Anuluj","Cannot upload file:":"Nie można przesłać pliku:","Centered image":"Obraz wyrównany do środka","Change image text alternative":"Zmień tekst zastępczy obrazka","Choose heading":"Wybierz nagłówek",Column:"Kolumna",Comment:"Skomentuj","Comment editor":"Edytor komentarza","Could not insert image at the current position.":"Nie można wstawić obrazka w bieżącej lokalizacji.","Could not obtain resized image URL.":"Nie można pobrać adresu URL obrazka po przeskalowaniu.",Default:"Domyślny","Delete column":"Usuń kolumnę","Delete comment thread?":"Usunąć wątek komentarzy?","Delete comment?":"Usunąć komentarz?","Delete row":"Usuń wiersz","Dim grey":"Ciemnoszary","Discard all selected suggestions":"Odrzuć wszystkie zaznaczone zmiany","Discard all suggestions":"Odrzuć wszystkie zmiany","Discard suggestion":"Odrzuć zmianę",Downloadable:"Do pobrania","Dropdown toolbar":"Rozwijany pasek narzędzi",Edit:"Edytuj","Edit link":"Edytuj odnośnik","Editor toolbar":"Pasek narzędzi edytora",ELEMENT_BLOCK_QUOTE:"cytat",ELEMENT_BULLETED_LIST:"lista punktowana",ELEMENT_CODE_BLOCK:["blok kodu","%0 bloki kodu","%0 bloków kodu","%0 bloków kodu"],ELEMENT_HEADING:["nagłówek (poziom %1)","%0 nagłówki (poziom %1)","%0 nagłówków (poziom %1)","%0 nagłówków (poziom %1)"],ELEMENT_HEADING_CUSTOM:["","","",""],ELEMENT_HORIZONTAL_LINE:["linia pozioma","%0 linie poziome","%0 linii poziomych","%0 linii poziomych"],ELEMENT_IMAGE:["obraz","%0 obrazy","%0 obrazów","%0 obrazów"],ELEMENT_LINE_BREAK:["nowa linia","%0 nowe linie","%0 nowych linii","%0 nowych linii"],ELEMENT_LIST_ITEM:["punkt listy","%0 punkty listy","%0 punktów listy","%0 punktów listy"],ELEMENT_MEDIA:["obiekt multimedialny","%0 obiekty multimedialne","%0 obiektów multimedialnych","%0 obiektów multimedialnych"],ELEMENT_NUMBERED_LIST:"lista numerowana",ELEMENT_PAGE_BREAK:["podział strony","%0 podziały strony","%0 podziałów strony","%0 podziałów strony"],ELEMENT_PARAGRAPH:["akapit","%0 akapity","%0 akapitów","%0 akapitów"],ELEMENT_SPACE:["spacja","%0 spacje","%0 spacji","%0 spacji"],ELEMENT_TABLE:["tabela","%0 tabele","%0 tabeli","%0 tabeli"],ELEMENT_TABLE_COLUMN:["kolumna tabeli","%0 kolumny tabeli","%0 kolumn tabeli","%0 kolumn tabeli"],ELEMENT_TABLE_COLUMN_WITH_TEXT:["kolumna tabeli *z tekstem* %1","%0 kolumny tabeli *z tekstem* %1","%0 kolumn tabeli *z tekstem* %1","%0 kolumn tabeli *z tekstem* %1"],ELEMENT_TABLE_ROW:["wiersz tabeli","%0 wiersze tabeli","%0 wierszy tabeli","%0 wierszy tabeli"],ELEMENT_TABLE_ROW_WITH_TEXT:["wiersz tabeli *z tekstem* %1","%0 wiersze tabeli *z tekstem* %1","%0 wierszy tabeli *z tekstem* %1","%0 wierszy tabeli *z tekstem* %1"],ELEMENT_TABLE_WITH_TEXT:"tabela *z tekstem* %0",ELEMENT_TITLE:"tytuł",ELEMENT_TODO_LIST:"lista do zaznaczania","Enter image caption":"Wstaw tytuł obrazka","Font Family":"Czcionka","Font Size":"Rozmiar czcionki",FORMAT_ALIGN_TO_CENTER:"wyśrodkuj",FORMAT_ALIGN_TO_LEFT:"wyrównej do lewej",FORMAT_ALIGN_TO_RIGHT:"wyrównej do prawej",FORMAT_BOLD:"pogrubienie",FORMAT_CODE:"kod",FORMAT_CUSTOM_HIGHLIGHT:"wyróżnienie (%0)",FORMAT_FULL_WIDTH_IMAGE:"obraz pełnej szerokości",FORMAT_HEADER_COLUMN:"kolumna nagłówka",FORMAT_HEADER_ROW:"wiersz nagłówka",FORMAT_HIGHLIGHT:"wyróżnienie",FORMAT_ITALIC:"kursywa",FORMAT_JUSTIFY_TEXT:"wyjustuj",FORMAT_REGULAR_COLUMN:"zwykła kolumna",FORMAT_REGULAR_ROW:"zwykły wiersz",FORMAT_RESTRICTED_DISABLED:"",FORMAT_RESTRICTED_ENABLED:"",FORMAT_SIDE_IMAGE:"obraz boczny",FORMAT_STRIKETHROUGH:"przekreślenie",FORMAT_SUBSCRIPT:"indeks dolny",FORMAT_SUPERSCRIPT:"indeks górny",FORMAT_UNDERLINE:"podkreślenie","Full size image":"Obraz w pełnym rozmiarze",Green:"Zielony",Grey:"Szary","Header column":"Kolumna nagłówka","Header row":"Wiersz nagłówka",Heading:"Nagłówek","Heading 1":"Nagłówek 1","Heading 2":"Nagłówek 2","Heading 3":"Nagłówek 3","Heading 4":"Nagłówek 4","Heading 5":"Nagłówek 5","Heading 6":"Nagłówek 6",Huge:"Bardzo duży","Image resize list":"","Image toolbar":"Pasek narzędzi obrazka","image widget":"Obraz","Insert column left":"Wstaw kolumnę z lewej","Insert column right":"Wstaw kolumnę z prawej","Insert image":"Wstaw obraz","Insert image or file":"Wstaw obrazek lub plik","Insert media":"Wstaw media","Insert paragraph after block":"Wstaw akapit po bloku","Insert paragraph before block":"Wstaw akapit przed blokiem","Insert row above":"Wstaw wiersz ponad","Insert row below":"Wstaw wiersz poniżej","Insert table":"Wstaw tabelę","Inserting image failed":"Wstawienie obrazka nie powiodło się.",Italic:"Kursywa",Justify:"Wyrównaj obustronnie","Left aligned image":"Obraz wyrównany do lewej","Light blue":"Jasnoniebieski","Light green":"Jasnozielony","Light grey":"Jasnoszary",Link:"Wstaw odnośnik","Link URL":"Adres URL","Media URL":"Adres URL","media widget":"widget osadzenia mediów","Merge cell down":"Scal komórkę w dół","Merge cell left":"Scal komórkę w lewo","Merge cell right":"Scal komórkę w prawo","Merge cell up":"Scal komórkę w górę","Merge cells":"Scal komórki",Next:"Następny",No:"Nie",NUMBER_OF_COMMENTS:["%0 Komentarz","%0 Komentarze","%0 Komentarzy","%0 Komentarza"],"Numbered List":"Lista numerowana","Open in a new tab":"Otwórz w nowej zakładce","Open link in new tab":"Otwórz odnośnik w nowej zakładce",Orange:"Pomarańczowy",Original:"",Paragraph:"Akapit","Paste the media URL in the input.":"Wklej adres URL mediów do pola.",PENDING_ACTION_COMMENT_THREAD:"Niezapisana zmiana w wątku komentarzy.",PENDING_ACTION_SUGGESTION:"Niezapisana zmiana w sugestii.",Previous:"Poprzedni",Purple:"Purpurowy",Red:"Czerwony",Redo:"Ponów",Remove:"Usuń",REPLACE_TEXT:"*Zamień:* %0 *na* %1","Reply...":"Odpowiedz...","Resize image":"","Resize image to %0":"","Resize image to the original size":"","Rich Text Editor":"Edytor tekstu sformatowanego","Rich Text Editor, %0":"Edytor tekstu sformatowanego, %0","Right aligned image":"Obraz wyrównany do prawej",Row:"Wiersz",Save:"Zapisz","Saving changes":"Zapisywanie zmian","Select all":"Zaznacz wszystko","Select column":"Zaznacz kolumnę","Select row":"Zaznacz wiersz","Selecting resized image failed":"Wybranie obrazka po przeskalowaniu nie powiodło się.","Show more items":"Pokaż więcej","Side image":"Obraz dosunięty do brzegu, oblewany tekstem",Small:"Mały","Split cell horizontally":"Podziel komórkę poziomo","Split cell vertically":"Podziel komórkę pionowo",Strikethrough:"Przekreślenie",Submit:"Zatwierdź","Table toolbar":"Pasek narzędzi tabel","Text alignment":"Wyrównanie tekstu","Text alignment toolbar":"Pasek narzędzi wyrównania tekstu","Text alternative":"Tekst zastępczy obrazka","The URL must not be empty.":"Adres URL nie może być pusty.","This link has no URL":"Nie podano adresu URL odnośnika","This media URL is not supported.":"Ten rodzaj adresu URL nie jest obsługiwany.",Tiny:"Bardzo mały","Tip: Paste the URL into the content to embed faster.":"Wskazówka: Wklej URL do treści edytora, by łatwiej osadzić media.",TOO_LONG_COMMENT_ALERT:"Komentarz jest zbyt długi. Twój komentarz ma %0 znaków. Dopuszczalny limit to %1 znaków.\"","Track changes":"Śledzenie zmian",Turquoise:"Turkusowy",Underline:"Podkreślenie",Undo:"Cofnij",Unlink:"Usuń odnośnik","Upload failed":"Przesyłanie obrazu nie powiodło się","Upload in progress":"Trwa przesyłanie",White:"Biały","Widget toolbar":"Pasek widgetów","Write a comment...":"Napisz komentarz...",Yellow:"Żółty",Yes:"Tak"}	);l.getPluralForm=function(n){return (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));