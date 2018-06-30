package EarthQuake;

public class DistanceFilter implements Filter {
	private Location myLoc;
	private float myDis;
	public DistanceFilter(Location loc, float dis){
		myLoc = loc;
		myDis = dis;
	}

	@Override
	public boolean satisfies(QuakeEntry qe) {
		float dis = qe.getLocation().distanceTo(myLoc);
		return dis<myDis;
	}
    public String getName(){
    	return "Distance";
    }

}
