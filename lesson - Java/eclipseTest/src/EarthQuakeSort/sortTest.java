package EarthQuakeSort;

import java.util.ArrayList;

import EarthQuake.QuakeEntry;

public class sortTest {

//easy version by find smallest element and add to output list
//	public ArrayList<QuakeEntry> sortByMagnitude(ArrayList<QuakeEntry> in){
//		ArrayList<QuakeEntry> out = new ArrayList<QuakeEntry>();
//		while(!in.isEmpty()){
//			QuakeEntry minQe = getSmallestMagnitude(in);
//			in.remove(minQe);
//			out.add(minQe);
//		}		
//		return out;
//	}
//		public QuakeEntry getSmallestMagnitude(ArrayList<QuakeEntry> list){
//			QuakeEntry min = list.get(0);
//			for(QuakeEntry qe:list){
//				if(qe.getMagnitude()<min.getMagnitude()){
//					min = qe;
//				}
//			}
//			return min;
//		}
	
	public int getSmallestMagnitude(ArrayList<QuakeEntry> list, int from){
		int minIndex = from;
		for(int i=from+1;i<list.size();i++){
			if(list.get(i).getMagnitude()<list.get(minIndex).getMagnitude()){
				minIndex = i;
			}
		}
		return minIndex;
	}
	
	public void sortByMagnitude(ArrayList<QuakeEntry> in){
		for(int i=0; i<in.size();i++){
			int minIndex = getSmallestMagnitude(in,i);
			QuakeEntry qmin = in.get(minIndex);
			in.set(minIndex, in.get(i));
			in.set(i, qmin);
		}
	}
}
