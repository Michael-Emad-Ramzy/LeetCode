class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
            $k=0;
        foreach($nums as $i=> $num){
            if($nums[$i]!==$val){
                $nums[$k]=$nums[$i];
                $k++;
            }
        }
        return $k;
    }
}