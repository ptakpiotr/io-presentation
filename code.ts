export const inheritanceCode = `class Obywatel {
  protected String imie;
  protected String nazwisko;
  protected String PESEL;
  
  public Obywatel(String i,String n,String p){
      this.imie = i;
      this.nazwisko = n;
      this.PESEL = p;
  }
  
  public String pobierzImie(){
      return this.imie;
  }
  
  public String pobierzNazwisko(){
      return this.nazwisko;
  }
  
  public String pobierzPESEL(){
      return this.PESEL;
  }
}

class Urzednik extends Obywatel{
  public Urzednik(String i,String n,String p){
      super(i,n,p);
  }
  
  public boolean nadajImie(Obywatel o, String noweImie){
      if (noweImie == o.imie){
          return false;
      }
      
      o.imie = noweImie;
      
      return true;
  }
  
  public boolean nadajNazwisko(Obywatel o, String noweNazwisko){
      if (noweNazwisko == o.nazwisko){
          return false;
      }
      
      o.nazwisko = noweNazwisko;
      
      return true;
  }
  
  public boolean nadajPESEL(Obywatel o, String nowyPesel){
      //potencjalna walidacja
      
      o.PESEL = nowyPesel;
      
      return true;
  }
}

class Kierowca extends Urzednik {
  private String numerPrawaJazdy;
  private boolean prawoJazdyAktualne;
  
  public Kierowca(String i,String n,String p,String np, boolean ps){
      super(i,n,p);
      this.numerPrawaJazdy = np;
      this.prawoJazdyAktualne = ps;
  }
  
  public String podajNumerPrawaJazdy(){
      return this.numerPrawaJazdy;
  }
}

public class Main
{
public static void main(String[] args) {
  Obywatel o = new Obywatel("Jan","Nowak","07221981332");
  Urzednik u = new Urzednik("Filip","Kowalski","53090937479");
  System.out.println(o.pobierzImie());
  
  u.nadajImie(o,"Marcin");
  
  System.out.println(o.pobierzImie());
  System.out.println(u.pobierzImie());
  
  //mozliwe
  Obywatel o2 = u;
  //niemozliwe - przyklad tylko obrazujacy zagadnienie
// 		Kierowca k = u
}
}
`;

export const interfaceCode = `interface Pojazd {
  void jedz();
  boolean czyJestSprawny();
}

interface Samochod extends Pojazd{
    default boolean czyWymagaPrawaJazdy(){
        return true;
    }
}

class SamochodSpalinowy implements Samochod{
  private boolean czyJestPaliwo;
  
  public void jedz(){
      
  }
  
  public boolean czyJestSprawny(){
      return czyJestPaliwo;
  }
  
}

class Rower implements Pojazd{
  private boolean czyRamaJestZlamana;
  
  public void jedz(){
      
  }
  
  public boolean czyJestSprawny(){
      return czyRamaJestZlamana;
  }
  
  public void sprawdzStan(boolean parametr){
      czyRamaJestZlamana = parametr;
  }
}

public class Main {
    public static void main(String[] args) {
        Pojazd p = new SamochodSpalinowy();
        //nie zadziala - Pojazd to niekoniecznie Samochod
        // System.out.println(p.czyWymagaPrawaJazdy());
        System.out.println(p.czyJestSprawny());
        Samochod s = (Samochod)p;
        System.out.println(s.czyWymagaPrawaJazdy());
        Pojazd r = new Rower();
        // niemozliwe - ClassCastException
        Samochod s2 = (Samochod)r;
    }
}
`

export const yamlCode = `version: '3'
services: 
  dbase:
    container_name: myredis-db
    image: redis:latest
    ports:
      - 6379:6379
    networks:
      - internal
networks:
  internal:
    driver: bridge`