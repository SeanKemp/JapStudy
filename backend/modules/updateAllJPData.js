import allJPData from '../../../allJPData.json' assert { type: 'json' };

var newAllJPData = [];
allJPData.map(function(note){
	var tempNote = {}
	//console.log(note.tags)
	note.tags = note.tags.replace("level", "").split(" ")
	tempNote.level = parseInt(note.tags[0])
	tempNote.type = note.tags[1]
	//console.log(note.tags)
	//console.log(note.level)
	//console.log(note.type)
	note.back = note.back.split("\n")
	if(tempNote.type === 'radical') {
		tempNote.label = note.front
		tempNote.radical = note.back[1]
		tempNote.mnemonic = note.back[2]
		tempNote.sortId = note.back[4]
	} else if(tempNote.type === 'kanji') {
		tempNote.label = note.front
		tempNote.meaning = note.back[1].split(", ")
		tempNote.onyomi = note.back[2]
		tempNote.kunyomi = note.back[3]
		tempNote.radical = note.back[4].split(", ")
		tempNote.radicalNames = note.back[6].split(", ")
		tempNote.mnemonic = note.back[8]
		tempNote.meaningInfo = note.back[9]
		tempNote.readingMnemonic = note.back[10]
		tempNote.readingInfo = note.back[11]
		tempNote.sortId = note.back[12]
	} else if(tempNote.type === 'vocab') {
		tempNote.label = note.front
		tempNote.meaning = note.back[1].split(", ")
		tempNote.reading = note.back[2]
		tempNote.vocabType = note.back[3]
		tempNote.example1JP = note.back[4].split(", ")
		tempNote.example1EN = note.back[5].split(", ")
		tempNote.example2JP = note.back[6]
		tempNote.example2EN = note.back[7]
		tempNote.example3JP = note.back[8]
		tempNote.example3EN = note.back[9]
		tempNote.meaningInfo = note.back[10]
		tempNote.readingInfo = note.back[11]
		tempNote.kanji = note.back[12].split(", ")
		tempNote.kanjiName = note.back[13].split(", ")
		tempNote.sortId = note.back[16]
	}
	newAllJPData.push(tempNote);
})
console.log(newAllJPData);

export default newAllJPData
