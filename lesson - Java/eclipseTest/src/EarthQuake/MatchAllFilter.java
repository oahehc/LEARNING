package EarthQuake;

import java.util.ArrayList;

public class MatchAllFilter implements Filter {
	private ArrayList<Filter> filters;
	public MatchAllFilter(){
		filters = new ArrayList<Filter>();
	}	

	
	public void addFilter(Filter f){
		filters.add(f);
	}
	@Override
	public boolean satisfies(QuakeEntry qe) {
		for(Filter f:filters){
			if(!f.satisfies(qe)){
				return false;
			}
		}
		return true;
	}

    public String getName(){
    	String filterName = "";
		for(Filter f:filters){
			filterName += f.getName() + " ";
		}
    	return filterName;
    }	
}
