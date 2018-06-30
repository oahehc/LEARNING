package EarthQuake;

import java.util.ArrayList;

import org.junit.Test;

public class QuakeFilter {

	public static void main(String[] args) {
//		MatchAllFilter maf = new MatchAllFilter();
//		maf.addFilter(new MinMagFilter(4.0));
//		maf.addFilter(new DepthFilter(-2000,-1000));
//		maf.addFilter(new DistanceFilter(myLoc,100));
//		ArrayList<QuakeEntry> quakes = filter(list,maf);
	}
	
	public ArrayList<QuakeEntry> filter(ArrayList<QuakeEntry> quakeData, Filter f){
		ArrayList<QuakeEntry> answer = new ArrayList<QuakeEntry>();
		for(QuakeEntry qe:quakeData){
			if(f.satisfies(qe)){
				answer.add(qe);
			}
		}
		return answer;
	}
	    public void quakesWithFilter() { 
	        EarthQuakeParser parser = new EarthQuakeParser(); 
	        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
	        String source = "data/nov20quakedatasmall.atom";
	        ArrayList<QuakeEntry> list  = parser.read(source);         
	        System.out.println("read data for "+list.size()+" quakes");

	        //Filter f = new MinMagFilter(4.0); 
	        //Location my = new Location(38,20);
	        //Filter f = new DistanceFilter(my,100000); 
	        //Filter f1 = new MagnitudeFilter(4,5);
	        Location tokyo = new Location(35.42,139.43);
	        Filter f1 = new DistanceFilter(tokyo,10000*1000); 
	        ArrayList<QuakeEntry> list2  = filter(list, f1); 
	        Filter f2 = new PhraseFilter("end","Japan");
	        ArrayList<QuakeEntry> finalList  = filter(list2, f2); 
	        
	        for (QuakeEntry qe: finalList) { 
	            System.out.println(qe);
	        } 
	    }

	@Test
	public void testMatchAllFilter(){
        EarthQuakeParser parser = new EarthQuakeParser(); 
        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
        String source = "data/nov20quakedatasmall.atom";
        ArrayList<QuakeEntry> list  = parser.read(source);         
        System.out.println("read data for "+list.size()+" quakes");
		
        MatchAllFilter f = new MatchAllFilter();
		Filter f1 = new MagnitudeFilter(0,2);
		f.addFilter(f1);
		Filter f2 = new DepthFilter(-100000,-10000);
		f.addFilter(f2);
		Filter f3 = new PhraseFilter("any","a");
		f.addFilter(f3);
		
		ArrayList<QuakeEntry> finalList = filter(list,f);
		for(QuakeEntry qe:finalList){
			System.out.println(qe);
		}
		System.out.println(f.getName());
	}
}
