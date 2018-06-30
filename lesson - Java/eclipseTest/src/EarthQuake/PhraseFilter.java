package EarthQuake;

public class PhraseFilter implements Filter {
	private String type; //start, end, any
	private String keyword;
	public PhraseFilter(String t,String k){
		type = t;
		keyword = k;
	}

	@Override
	public boolean satisfies(QuakeEntry qe) {
		int index = qe.getInfo().indexOf(keyword);
		if(type=="start" && index==0){
			return true;
		}
		else if(type=="end" && index == (qe.getInfo().length()-keyword.length())){
			return true;
		}
		else if(type=="any" && index != -1){
			return true;
		}
		return false;
	}
    public String getName(){
    	return "Phrase";
    }

}
