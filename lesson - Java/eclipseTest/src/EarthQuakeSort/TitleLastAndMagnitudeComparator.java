package EarthQuakeSort;
import java.util.Comparator;

public class TitleLastAndMagnitudeComparator implements Comparator<QuakeEntry> {

	public int compare(QuakeEntry q1, QuakeEntry q2){
		Character q1EndChar = q1.getInfo().charAt(q1.getInfo().length()-1);
		Character q2EndChar = q2.getInfo().charAt(q2.getInfo().length()-1);
		
		if(!q1EndChar.equals(q2EndChar)){
			return q1EndChar.compareTo(q2EndChar);
		}
		return Double.compare(q1.getMagnitude(), q2.getMagnitude());
	}
}
