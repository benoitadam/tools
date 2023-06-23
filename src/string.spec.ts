import { firstUpper, firstLower, clean, words, pascal, camel } from './string';

describe('string', () => {
  test(`firstUpper`, () => {
    expect(firstUpper('abc')).toEqual('Abc');
    expect(firstUpper('ABC')).toEqual('ABC');
  });

  test(`firstLower`, () => {
    expect(firstLower('abc')).toEqual('abc');
    expect(firstLower('AbC')).toEqual('abC');
    expect(firstLower('ABC')).toEqual('aBC');
  });

  test(`clean`, () => {
    expect(clean('àáâãäå ç èéêë ìíîï ñ òóôõö ùúûü ýÿ')).toEqual('aaaaaa c eeee iiii n ooooo uuuu yy');
    // expect(removeAccents('æœ')).toEqual('æœ');
    // const latinMap = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };
    // const koMap: any = {};
    // Object.entries(latinMap).forEach(([key, value]) => {
    //   if (removeAccents(key) !== value) koMap[key] = value;
    // });
    // expect(koMap).toEqual({"Æ": "AE", "Ø": "O", "æ": "ae", "ø": "o", "Đ": "D", "đ": "d", "Ħ": "H", "ħ": "h", "ı": "i", "Ĳ": "IJ", "ĳ": "ij", "Ŀ": "L", "ŀ": "l", "Ł": "L", "ł": "l", "Œ": "OE", "œ": "oe", "Ŧ": "T", "ŧ": "t", "ſ": "s", "ƀ": "b", "Ɓ": "B", "Ƃ": "B", "ƃ": "b", "Ɔ": "O", "Ƈ": "C", "ƈ": "c", "Ɗ": "D", "Ƌ": "D", "ƌ": "d", "Ǝ": "E", "Ɛ": "E", "Ƒ": "F", "ƒ": "f", "Ɠ": "G", "ƕ": "hv", "Ɨ": "I", "Ƙ": "K", "ƙ": "k", "ƚ": "l", "Ɯ": "M", "Ɲ": "N", "ƞ": "n", "Ɵ": "O", "Ƣ": "OI", "ƣ": "oi", "Ƥ": "P", "ƥ": "p", "ƫ": "t", "Ƭ": "T", "ƭ": "t", "Ʈ": "T", "Ʋ": "V", "Ƴ": "Y", "ƴ": "y", "Ƶ": "Z", "ƶ": "z", "Ǆ": "DZ", "ǅ": "D", "ǆ": "dz", "Ǉ": "LJ", "ǈ": "L", "ǉ": "lj", "Ǌ": "NJ", "ǋ": "N", "ǌ": "nj", "ǝ": "e", "Ǣ": "AE", "ǣ": "ae", "Ǥ": "G", "ǥ": "g", "Ǳ": "DZ", "ǲ": "D", "ǳ": "dz", "Ǽ": "AE", "ǽ": "ae", "Ǿ": "O", "ǿ": "o", "Ƞ": "N", "ȡ": "d", "Ȣ": "OU", "ȣ": "ou", "Ȥ": "Z", "ȥ": "z", "ȴ": "l", "ȵ": "n", "ȶ": "t", "ȷ": "j", "Ⱥ": "A", "Ȼ": "C", "ȼ": "c", "Ƚ": "L", "Ⱦ": "T", "ȿ": "s", "ɀ": "z", "Ƀ": "B", "Ʌ": "V", "Ɇ": "E", "ɇ": "e", "Ɉ": "J", "ɉ": "j", "ɋ": "q", "Ɍ": "R", "ɍ": "r", "Ɏ": "Y", "ɏ": "y", "ɐ": "a", "ɓ": "b", "ɔ": "o", "ɕ": "c", "ɖ": "d", "ɗ": "d", "ɘ": "e", "ɛ": "e", "ɟ": "j", "ɠ": "g", "ɡ": "g", "ɢ": "G", "ɥ": "h", "ɦ": "h", "ɨ": "i", "ɪ": "I", "ɫ": "l", "ɬ": "l", "ɭ": "l", "ɯ": "m", "ɰ": "m", "ɱ": "m", "ɲ": "n", "ɳ": "n", "ɴ": "N", "ɵ": "o", "ɶ": "OE", "ɹ": "r", "ɺ": "r", "ɻ": "r", "ɼ": "r", "ɽ": "r", "ɾ": "r", "ɿ": "r", "ʀ": "R", "ʁ": "R", "ʂ": "s", "ʄ": "j", "ʇ": "t", "ʈ": "t", "ʋ": "v", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ʏ": "Y", "ʐ": "z", "ʑ": "z", "ʙ": "B", "ʛ": "G", "ʜ": "H", "ʝ": "j", "ʞ": "k", "ʟ": "L", "ʠ": "q", "ʮ": "h", "ʯ": "h", "ᴀ": "A", "ᴁ": "AE", "ᴂ": "ae", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ᴉ": "i", "ᴊ": "J", "ᴋ": "K", "ᴌ": "L", "ᴍ": "M", "ᴎ": "N", "ᴏ": "O", "ᴐ": "O", "ᴑ": "o", "ᴓ": "o", "ᴔ": "oe", "ᴕ": "OU", "ᴘ": "P", "ᴙ": "R", "ᴚ": "R", "ᴛ": "T", "ᴜ": "U", "ᴝ": "u", "ᴠ": "V", "ᴡ": "W", "ᴢ": "Z", "ᵢ": "i", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ᵫ": "ue", "ᵬ": "b", "ᵭ": "d", "ᵮ": "f", "ᵯ": "m", "ᵰ": "n", "ᵱ": "p", "ᵲ": "r", "ᵳ": "r", "ᵴ": "s", "ᵵ": "t", "ᵶ": "z", "ᵷ": "g", "ᵹ": "g", "ᵺ": "th", "ᵽ": "p", "ᶀ": "b", "ᶁ": "d", "ᶂ": "f", "ᶃ": "g", "ᶄ": "k", "ᶅ": "l", "ᶆ": "m", "ᶇ": "n", "ᶈ": "p", "ᶉ": "r", "ᶊ": "s", "ᶌ": "v", "ᶍ": "x", "ᶎ": "z", "ᶏ": "a", "ᶑ": "d", "ᶒ": "e", "ᶓ": "e", "ᶖ": "i", "ᶗ": "o", "ᶙ": "u", "ẚ": "a", "ẛ": "s", "ẜ": "s", "ẝ": "s", "Ỿ": "Y", "ỿ": "y", "ₐ": "a", "ₑ": "e", "ₒ": "o", "ₓ": "x", "ↄ": "c", "Ⱡ": "L", "ⱡ": "l", "Ɫ": "L", "Ᵽ": "P", "Ɽ": "R", "ⱥ": "a", "ⱦ": "t", "Ⱨ": "H", "ⱨ": "h", "Ⱪ": "K", "ⱪ": "k", "Ⱬ": "Z", "ⱬ": "z", "Ɱ": "M", "Ɐ": "A", "ⱱ": "v", "Ⱳ": "W", "ⱳ": "w", "ⱴ": "v", "ⱸ": "e", "ⱹ": "r", "ⱺ": "o", "ⱻ": "E", "ⱼ": "j", "Ꜩ": "TZ", "ꜩ": "tz", "ꜰ": "F", "ꜱ": "S", "Ꜳ": "AA", "ꜳ": "aa", "Ꜵ": "AO", "ꜵ": "ao", "Ꜷ": "AU", "ꜷ": "au", "Ꜹ": "AV", "ꜹ": "av", "Ꜻ": "AV", "ꜻ": "av", "Ꜽ": "AY", "ꜽ": "ay", "Ꜿ": "C", "ꜿ": "c", "Ꝁ": "K", "ꝁ": "k", "Ꝃ": "K", "ꝃ": "k", "Ꝅ": "K", "ꝅ": "k", "Ꝉ": "L", "ꝉ": "l", "Ꝋ": "O", "ꝋ": "o", "Ꝍ": "O", "ꝍ": "o", "Ꝏ": "OO", "ꝏ": "oo", "Ꝑ": "P", "ꝑ": "p", "Ꝓ": "P", "ꝓ": "p", "Ꝕ": "P", "ꝕ": "p", "Ꝗ": "Q", "ꝗ": "q", "Ꝙ": "Q", "ꝙ": "q", "Ꝟ": "V", "ꝟ": "v", "Ꝡ": "VY", "ꝡ": "vy", "Ꝫ": "ET", "ꝫ": "et", "Ꝭ": "IS", "ꝭ": "is", "ꝸ": "um", "Ꝺ": "D", "ꝺ": "d", "Ꝼ": "F", "ꝼ": "f", "Ᵹ": "G", "Ꞁ": "L", "ꞁ": "l", "Ꞃ": "R", "ꞃ": "r", "Ꞅ": "S", "ꞅ": "s", "Ꞇ": "T", "ꞇ": "t", "ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl", "ﬆ": "st"});
  });

  test(`words`, () => {
    expect(words('abc')).toEqual(['abc']);
    expect(words('abc5')).toEqual(['abc5']);
    expect(words('abcDef')).toEqual(['abc', 'def']);
    expect(words('abcDef53')).toEqual(['abc', 'def53']);
    expect(words('abcDefG5')).toEqual(['abc', 'def', 'g5']);
    expect(words('abc def')).toEqual(['abc', 'def']);
    expect(words('abc Def')).toEqual(['abc', 'def']);
    expect(words('ABC DEF')).toEqual(['abc', 'def']);
    expect(words('Abc Def')).toEqual(['abc', 'def']);
    expect(words('Abc5Def')).toEqual(['abc5', 'def']);
    expect(words(' abc ')).toEqual(['abc']);
    expect(words(' abc def ')).toEqual(['abc', 'def']);
    expect(words(' ábc déf ')).toEqual(['abc', 'def']);
    expect(words(' àbc dèf ')).toEqual(['abc', 'def']);
    expect(words(' ÀBC DÈF ')).toEqual(['abc', 'def']);
    expect(words(' ÀBC dèf ')).toEqual(['abc', 'def']);
    expect(words(' ÀBC dèfGhi ')).toEqual(['abc', 'def', 'ghi']);
  });

  test(`pascal`, () => {
    expect(pascal('abc')).toEqual('Abc');
    expect(pascal('abc def')).toEqual('AbcDef');
    expect(pascal(' abc def ')).toEqual('AbcDef');
    expect(pascal(' abcDef ')).toEqual('AbcDef');
    expect(pascal('abc1')).toEqual('Abc1');
    expect(pascal('abc2 def3')).toEqual('Abc2Def3');
    expect(pascal(' abc4 def5 ')).toEqual('Abc4Def5');
  });

  test(`camel`, () => {
    expect(camel('abc')).toEqual('abc');
    expect(camel('abc def')).toEqual('abcDef');
    expect(camel(' abc def ')).toEqual('abcDef');
    expect(camel(' Abc Def ')).toEqual('abcDef');
    expect(camel('abc1')).toEqual('abc1');
    expect(camel('abc2 def3')).toEqual('abc2Def3');
    expect(camel(' abc4 def5 ')).toEqual('abc4Def5');
  });
});


