// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
// -->

class Video{
    constructor(title,uploader,time){
        this.title=title
        this.uploader=uploader
        this.time=time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`); 
    }    
}
newVideo1=new Video('Good guy','Jimmy','14m')
newVideo2=new Video('Bad guy','Nicky','19m')
newVideo1.watch()
newVideo2.watch()

let videoStore=[{
    title:'Comonina',
    uploader:'John',
    time:'12m'},
    {
    title:'frukt2',
    uploader:'Papan',
    time:'2m'},
    {
    title:'RepairMan',
    uploader:'Nitara',
    time:'14m'},
    {
    title:'Lokos',
    uploader:'Andrey',
    time:'10m'},
    {
    title:'Viral',
    uploader:'Hogs',
    time:'18m'}
]

let videos=[]
videoStore.forEach((item,index)=>{
videos.push(new Video(item.title,item.uploader,item.time))})


console.log(videos[0].watch());