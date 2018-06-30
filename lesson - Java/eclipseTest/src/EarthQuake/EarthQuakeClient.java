package EarthQuake;

import java.util.ArrayList;

public class EarthQuakeClient {
            
    private static final String earthquakeURL = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
    public EarthQuakeClient(){
    	
    }
    
	public void dumpCSV(ArrayList<QuakeEntry> list){
		System.out.println("Latitude,Longitude,Magnitude,Info");
		for(QuakeEntry qe : list){
			System.out.printf("%4.2f,%4.2f,%4.2f,%s\n",
			                  qe.getLocation().getLatitude(),
			                  qe.getLocation().getLongitude(),
			                  qe.getMagnitude(),
			                  qe.getInfo());
	    }
		
	}
	    public void createCSV(){
	        EarthQuakeParser parser = new EarthQuakeParser();
	        String source = "data/nov20quakedata.atom";
	        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
	        ArrayList<QuakeEntry> list = parser.read(source);
	        dumpCSV(list);
	        System.out.println("# quakes read: " + list.size());
	    }


    public ArrayList<QuakeEntry> filterByMagnitude(ArrayList<QuakeEntry> quakeData, double magMin) {
        ArrayList<QuakeEntry> answer = new ArrayList<QuakeEntry>();
        for (QuakeEntry qe : quakeData) {
            if (qe.getMagnitude() > magMin) {
                answer.add(qe);
            }
        }
        return answer;              
    }
		public void bigQuakes() {
		    EarthQuakeParser parser = new EarthQuakeParser();
	        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
	        //String source = "data/nov20quakedata.atom";
	        String source = "data/nov20quakedatasmall.atom";
	        ArrayList<QuakeEntry> list = parser.read(source);
	        System.out.println("read data for " + list.size() + " quakes");
	        ArrayList<QuakeEntry> listBig = filterByMagnitude(list, 5.0);
	        for (QuakeEntry qe : listBig) {
	           System.out.println(qe); 
	        }
	        System.out.println("Find " + listBig.size() + " quakes");
		}
    
    public ArrayList<QuakeEntry> filterByDistanceFrom(ArrayList<QuakeEntry> quakeData, double distMax, Location from) {      
        ArrayList<QuakeEntry> answer = new ArrayList<QuakeEntry>();
        // TODO
        for (QuakeEntry qe : quakeData) {
            if (qe.getLocation().distanceTo(from) < distMax) {
                answer.add(qe);
            }
        }
        return answer;
    }
	    public void closeToMe() {
	        EarthQuakeParser parser = new EarthQuakeParser();
	        String source = "data/nov20quakedata.atom";
	        //String source = earthquakeURL;
	        ArrayList<QuakeEntry> list = parser.read(source);
	        System.out.println("# quakes read: " + list.size());
	        
	        //Durham, NC
	        //Location city = new Location(35.988, -78.907);
	        //Bridgeport, CA
	        Location city = new Location(38.17, -118.82);
	        ArrayList<QuakeEntry> close = filterByDistanceFrom(list, 1000*1000, city);
	        for (int k=0; k< close.size(); k++) {
	            QuakeEntry entry = close.get(k);
	            double distanceInMeters = city.distanceTo(entry.getLocation());
	            System.out.println(distanceInMeters/1000 + " " + entry.getInfo());
	        }
	    }
    
    
    public ArrayList<QuakeEntry> filterByDepth(ArrayList<QuakeEntry> quakeData,double minDepth, double maxDepth){
    	ArrayList<QuakeEntry> answer = new ArrayList<QuakeEntry>();
        for (QuakeEntry qe : quakeData) {
            if (qe.getDepth()<maxDepth && qe.getDepth()>minDepth) {
                answer.add(qe);
            }
        }
        return answer;    	
    } 
	    public void quakesOfDepth(){
	        EarthQuakeParser parser = new EarthQuakeParser();
	        String source = "data/nov20quakedatasmall.atom";
	        //String source = "data/nov20quakedata.atom";
	        //String source = earthquakeURL;
	        ArrayList<QuakeEntry> list = parser.read(source);
	        System.out.println("# quakes read: " + list.size());
	
	        ArrayList<QuakeEntry> depth = filterByDepth(list, -10000.0, -5000.0);
	        for (int k=0; k< depth.size(); k++) {
	            QuakeEntry entry = depth.get(k);
	            //double distanceInMeters = city.distanceTo(entry.getLocation());
	            System.out.println(entry);
	        }   	
	    }
    
    //assignment3
    public ArrayList<QuakeEntry> filterByPhrase(ArrayList<QuakeEntry> quakeData,String where,String phrase){
    	//where = start,end,any
    	ArrayList<QuakeEntry> answer = new ArrayList<QuakeEntry>();
        for (QuakeEntry qe : quakeData) {
        	String title = qe.getInfo();
        	int index = title.indexOf(phrase);
            if (where=="start" && index == 0){
            	answer.add(qe);
            }
            else if(where=="end" && index == (title.length()-phrase.length())){
            	answer.add(qe);
            }
            else if(where=="any" && index != -1){
            	answer.add(qe);
            }
        }
        return answer;
    }

    	public void quakesByPhrase(String position, String keyword){
	        EarthQuakeParser parser = new EarthQuakeParser();
	        String source = "data/nov20quakedatasmall.atom";
	        //String source = "data/nov20quakedata.atom";
	        //String source = earthquakeURL;
	        ArrayList<QuakeEntry> list = parser.read(source);
	        System.out.println("# quakes read: " + list.size());
		        
	        ArrayList<QuakeEntry> phraseFilter = filterByPhrase(list, position, keyword);
	        for (int k=0; k< phraseFilter.size(); k++) {
	            QuakeEntry entry = phraseFilter.get(k);
	            //double distanceInMeters = city.distanceTo(entry.getLocation());
	            System.out.println(entry);
	        }  
    	}
    	
    public static void main(String[] args){
    	EarthQuakeClient eqc = new EarthQuakeClient();
    	eqc.quakesByPhrase("end","California");
    	eqc.quakesByPhrase("any","Can");
    	eqc.quakesByPhrase("start","Explosion");
    }
}
