//(function(){
	var name_new_task
	var taskList = [];
	var id_start = 0,
	popup = document.querySelector('#popup');

	var Task = function (Pname, Ppomodoro, Pdeadline) {
		//this.id = generateId();
		//this.name = Pname;
		this.name = (Pname != undefined) ? Pname : "default task";
		this.pomodoro_length = ((Ppomodoro != undefined) && !isNaN(Ppomodoro) ) ? Ppomodoro : 1;
		this.deadline = (Pdeadline != undefined) ? Pdeadline : 0;

		displayTasks(this, id_start)

		this.id = generateId();
	}

	// Constructor of my object Task
	// Task.prototype.initialize = function () {
	// 	id_start++;
	// }

	document.getElementById('CLI').focus();

	//document.querySelector("#add_new_item").addEventListener("click", function(){createNewTask();});

	document.querySelector("#pomodoroPlay").addEventListener("click", function(){PomodoroTimer02(10);});
	// document.querySelector("#pomodoroTimer").addEventListener("click", function(){PomodoroTimer02(1);});

	document.querySelector("#pomodoroReset").addEventListener("click", function(){ window.clearTimeout(timeouts); });

	document.getElementById('submit').onsubmit = function(){
		console.log(document.getElementById('CLI').value);
		alert(document.getElementById('CLI').innerHTML);
		return false;
	};

	document.getElementById('reset').onreset = function(){
		return false;
	};

	function generateId() { return id_start++; };

	// newTask = Object.create(Task)
	function createNewTask(){
		// name_new_task = window.prompt("What's the name of your task?");
		name_new_task = document.querySelector('#formTaskName').value
		pomodoro_new_task = document.querySelector('#formTaskPomodoro').value;
		pomodoro_new_task = document.querySelector('#formTaskDeadline').value;
		for(var i=0;i<3;i++){document.querySelectorAll('#popup input')[i].value = "";};
		popup.style.display = 'none';

		taskList[id_start] = new Task(name_new_task, pomodoro_new_task);
		
		console.log(taskList);
		console.log(taskList[id_start]);
		console.log('id_start = '+id_start);

		//saveJSON();
		//displayTasks(taskList, id_start)
	}


	function form(){
		popup.style.display = "block";
	}

	//function saveJSON() {

	function displayTasks(task, id){
		var textnode, node, nodeTaskName;

		node = document.createElement("DIV");
		//node.className = "single_item";
		nodeTaskName = document.createElement("DIV");
		//nodeTaskName.className = "length_time";
	    textnode = document.createTextNode(task.name);
	    textnode02 = document.createTextNode('<br>');
	    textnode03 = document.createTextNode(task.pomodoro_length);
	    console.log(textnode+textnode02+textnode03);
	    taskNoun = textnode+textnode02+textnode03;
		nodeTaskName = taskNoun.appendChild(taskNoun);
		document.querySelector('#list_items').appendChild(nodeTaskName);
	    document.querySelector('#list_items').lastChild.appendChild(nodeTaskName);
	    document.querySelector('#list_items').lastChild.appendChild(document.createElement("DIV"));;
	}


	function PomodoroTimer02(time){
		//We wait for a time in minute
		var timer = (time == undefined) ? 25 : parseInt(time);
		var timeLapse = Date.now() + (timer*60*1000);
		console.log('date.now : '+Date.now());
		console.log('timeLapse: '+timeLapse);

			// $("#pomodoroTimer").countdown(timeLapse, function(event) {
			//     $(this).text(
			//     	event.strftime('%M:%S')
			//     );
			// }).on('finish.countdown', alert('done !') );

		$("#pomodoroTimer").countdown(timeLapse)
		.on('update.countdown', function(event){
			$(this).text(event.strftime('%M:%S'));
			if('%M'>59){
				console.log('Dayum! Au dessus de 59 !');
			}else{}
		})
		.on('finish.countdown', function(){
			document.querySelector('title').innerHTML = "Time is over!";
			document.getElementsByName('flavicon')[0].setAttribute("href", "something else");
			alert('done !');
			//Play a sound
			//Change title
			// Changement flavicon
		});
	}

//})();