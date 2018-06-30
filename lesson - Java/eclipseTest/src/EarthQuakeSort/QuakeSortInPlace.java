package EarthQuakeSort;


/**
 * Write a description of class QuakeSortInPlace here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
import java.util.ArrayList;

import org.junit.Test;

public class QuakeSortInPlace {
    public QuakeSortInPlace() {
        // TODO Auto-generated constructor stub
    }
   
    public int getSmallestMagnitude(ArrayList<QuakeEntry> quakes, int from) {
        int minIdx = from;
        for (int i=from+1; i< quakes.size(); i++) {
            if (quakes.get(i).getMagnitude() < quakes.get(minIdx).getMagnitude()) {
                minIdx = i;
            }
        }
        return minIdx;
    }
    
    public void sortByMagnitude(ArrayList<QuakeEntry> in) {
       for (int i=0; i< in.size(); i++) {
            int minIdx = getSmallestMagnitude(in,i);
            QuakeEntry qi = in.get(i);
            QuakeEntry qmin = in.get(minIdx);
            in.set(i,qmin);
            in.set(minIdx,qi);
        }
    }

    public void testSort() {
        EarthQuakeParser parser = new EarthQuakeParser(); 
        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
        String source = "data/nov20quakedatasmall.atom";
        //String source = "data/nov20quakedata.atom";
        ArrayList<QuakeEntry> list  = parser.read(source);  
       
        System.out.println("read data for "+list.size()+" quakes");    
        sortByMagnitude(list);
        for (QuakeEntry qe: list) { 
            System.out.println(qe);
        } 
    }
    
    public void createCSV() {
        EarthQuakeParser parser = new EarthQuakeParser();
        //String source = "data/nov20quakedata.atom";
        String source = "data/nov20quakedatasmall.atom";
        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
        ArrayList<QuakeEntry> list  = parser.read(source);
        dumpCSV(list);
        System.out.println("# quakes read: " + list.size());
    }
    
    public void dumpCSV(ArrayList<QuakeEntry> list) {
		System.out.println("Latitude,Longitude,Magnitude,Info");
		for(QuakeEntry qe : list){
			System.out.printf("%4.2f,%4.2f,%4.2f,%s\n",
			                  qe.getLocation().getLatitude(),
			                  qe.getLocation().getLongitude(),
			                  qe.getMagnitude(),
			                  qe.getInfo());
	    }
	}
    
    
    public int getLargestDepth(ArrayList<QuakeEntry> quakeData, int from){
        int largestIndex = from;
        for (int i=from+1; i< quakeData.size(); i++) {
            if (quakeData.get(i).getDepth() > quakeData.get(largestIndex).getDepth()) {
            	largestIndex = i;
            }
        }
        return largestIndex;
    }
    public void sortByLargestDepth(ArrayList<QuakeEntry> quakeData){
    	for(int i=0;i<quakeData.size();i++){
    		int largest = getLargestDepth(quakeData,i);
    		QuakeEntry largestQe = quakeData.get(largest);
    		quakeData.set(largest, quakeData.get(i));
    		quakeData.set(i, largestQe);
    	}
    }
    public void testSortByDepth() {
        EarthQuakeParser parser = new EarthQuakeParser(); 
        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
        String source = "data/nov20quakedatasmall.atom";
        //String source = "data/nov20quakedata.atom";
        ArrayList<QuakeEntry> list  = parser.read(source);  
       
        System.out.println("read data for "+list.size()+" quakes");    
        sortByLargestDepth(list);
        for (QuakeEntry qe: list) { 
            System.out.println(qe);
        } 
    }
    
    
    //bubble sort
    public void quakeListSwitch(ArrayList<QuakeEntry> quakeData,int i,int j){
    	QuakeEntry temp = quakeData.get(i);
    	quakeData.set(i, quakeData.get(j));
    	quakeData.set(j, temp);
    }
    public void onePassBubbleSort(ArrayList<QuakeEntry> quakeData,int numSorted){
    	for(int i=0;i<quakeData.size()-numSorted-1;i++){
    		if(quakeData.get(i).getMagnitude()>quakeData.get(i+1).getMagnitude()){
    			quakeListSwitch(quakeData,i,i+1);
    		}
    	}
    }
    public void sortByMagnitudeWithBubbleSort(ArrayList<QuakeEntry> in){
    	for(int i=0;i<in.size()-1;i++){
    		onePassBubbleSort(in,i);
//    		System.out.println("pass "+i);
//            for (QuakeEntry qe: in) { 
//                System.out.println(qe);
//            }     		
    	}
    }
    public void testBubbleSort(){
        EarthQuakeParser parser = new EarthQuakeParser(); 
        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
        //String source = "data/nov20quakedatasmall.atom";
        //String source = "data/nov20quakedata.atom";
        String source = "data/earthquakeDataSampleSix2.atom";
        ArrayList<QuakeEntry> list  = parser.read(source);  
       
        System.out.println("read data for "+list.size()+" quakes");    
        sortByMagnitudeWithBubbleSort(list);
        for (QuakeEntry qe: list) { 
            System.out.println(qe);
        } 
    }
    
    
    public boolean checkInSortedOrder(ArrayList<QuakeEntry> quakes){
    	for(int i=0;i<quakes.size()-1;i++){
    		if(quakes.get(i).getMagnitude()>quakes.get(i+1).getMagnitude()){
    			return false;
    		}
    	}
    	return true;
    }
    public void sortByMagnitudeWithBubbleSortWithCheck(ArrayList<QuakeEntry> in){
    	for(int i=0;i<in.size()-1;i++){
    		onePassBubbleSort(in,i);
    		if(checkInSortedOrder(in)){
    			break;
    		}
    	}
    }
    @Test
    public void testBubbleSortWithCheck(){
        EarthQuakeParser parser = new EarthQuakeParser(); 
        //String source = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.atom";
        //String source = "data/nov20quakedatasmall.atom";
        //String source = "data/nov20quakedata.atom";
        String source = "data/earthquakeDataSampleSix2.atom";
        ArrayList<QuakeEntry> list  = parser.read(source);  
       
        System.out.println("read data for "+list.size()+" quakes");    
        sortByMagnitudeWithBubbleSortWithCheck(list);
        for (QuakeEntry qe: list) { 
            System.out.println(qe);
        } 
    }
    
}
