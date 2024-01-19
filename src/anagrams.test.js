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
    it('returns false when either of the strings has extra letters', () => {
        const expected = false
        const actual = isAnagrams('elbows', 'below')
        expect(actual).to.equal(expected)

        const actual2 = isAnagrams('below', 'elbows')
        expect(actual2).to.equal(expected)
    })

    // 'listens' 'silent' NOT anagrams
       it('returns false when the strings have the same letters in different quantities', () => {
          const expected = false
          const actual = isAnagrams('listens', 'silent')
          expect(actual).to.equal(expected)
       })
    // 'conservation' 'voices rant on' ARE anagrams
    
    // 'STATE' ''taste ARE anagrams
    

  

})