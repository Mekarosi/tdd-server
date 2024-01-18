import { expect } from "chai";
import { isAnagrams} from "./anagrams.js"

describe('isAnagrams basic functionality', () => {
    // 'listen' 'silent'
    // 'elbow' 'below'
    it('returns true when two know anagrams are passed in', () => {
        const expected = true
        const actual = isAnagrams('listen', 'silent') 
        expect(actual).to.equal(expected)
     })

    // 'elbows' 'below' NOT anagrams

    // 'listens' 'silent' NOT anagrams

    // 'conservation' 'voices rant on' ARE anagrams
    
    // 'STATE' ''taste ARE anagrams
    

  

})