package EarthQuake;

import java.util.ArrayList;

public class LargestQuakes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	
	public void findLargestQuakes(){
        EarthQuakeParser parser = new EarthQuakeParser();
        String source = "data/nov20quakedatasmall.atom";
        //String source = "data/nov20quakedata.atom";
        //String source = earthquakeURL;
        ArrayList<QuakeEntry> list = parser.read(source);
        System.out.println("# quakes read: " + list.size());
		
        ArrayList<QuakeEntry> largest = getLargest(list, 5);
        for(int i=0;i<largest.size();i++){
        	System.out.println(largest.get(i));
        }
//        int index = indexOfLargest(list);
//        System.out.println(index);
//        System.out.println(list.get(index));        
	}
	
	public int indexOfLargest(ArrayList<QuakeEntry> data){
		int index = 0;
		double largest = 0;
		for(QuakeEntry qe:data){
			double current = qe.getMagnitude();
			if(current>largest){
				index = data.indexOf(qe);
				largest = current;
			}
		}
		return index;		
	}
	
	public ArrayList<QuakeEntry> getLargest(ArrayList<QuakeEntry> quakeData, int howMany){
		ArrayList<QuakeEntry> copy = new ArrayList<QuakeEntry>(quakeData);
		ArrayList<QuakeEntry> largest = new ArrayList<QuakeEntry>();
		for(int i=0;i<howMany;i++){
			int index = indexOfLargest(copy);
			largest.add(copy.get(index));
			copy.remove(index);
		}	
		return largest;		
	}

}
