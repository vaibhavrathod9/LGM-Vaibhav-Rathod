*{
	margin: 0;
	box-sizing: border-box;
	
}

body {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	color: #FFF;
	background-image: url("tera1.jpg");
	background-repeat: no-repeat, repeat;
	background-size: 100%;
	
}

header {
	padding: 2rem 1rem;
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	border: solid 0.6px white;
	background-color: #19253e;
}

header h1{ 
	text-align: center;
	font-size: 3.5rem;
	font-weight: 800;
	color: black;
	margin-bottom: 2rem;
	background-color: rgba(245 162 162 / 70%);
}

#new_task_fm {
	display: flex;;
}

input, button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

#new-task-input {
	flex: 1 1 0%;
	background-color: rgba(65, 64, 64, 0.788);
	padding: 1.4rem;
	
	margin-right: 2rem;
	color: var(--light);
	font-size: 1.2rem;
	border: solid 1.2px white;
}

#new-task-input::placeholder {
	color: rgb(137, 134, 134);
}

#new-task-submit {
	color: rgb(36, 234, 50);
	font-size: 1.25rem;
	font-weight: 800;	
	background-color: #494c53cb;
	cursor: pointer;
	transition: 0.6s;
	border-radius: 5px;
}

#new-task-submit:hover {
	opacity: 0.8;
}

#new-task-submit:active {
	opacity: 0.6;
}

p{
	text-align: center;
	background-color: #19253ea4;
	margin: 1.2rem;
	padding: 5px;
	border-radius: 20px;
	font-size: 1.2rem;

}
main {
	flex: 1 1 0%;
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
}

.task-list {
	padding: 1rem;
	border-top: none;
	border: solid 0.6px white;
	background-color: #19253e;

}

.task-list h2 {
	font-size: 2rem;
	font-weight: 800;
	color:#EEE;
	margin-bottom: 2rem;
}

#tasks .task {
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 5, 5, 0.651);
	padding: 1rem;
	border-radius: 1rem;
	margin-bottom: 1rem;
	border: solid 1.2px white;
}

.task .content {
	flex: 1 1 0%;
}

.task .content .text {
	color: var(--light);
	font-size: 1.125rem;
	width: 100%;
	display: block;
	transition: 0.4s;
}


.task .actions {
	display: flex;
	margin: 0 -0.5rem;
}

.task .actions button {
	cursor: pointer;
	margin: 0 0.5rem;
	font-size: 1rem;
	font-weight: 900;
	text-transform: uppercase;
	transition: 0.4s;
	background-color: #EEE;
	border-radius: 10px;
	padding: 5px 20px;
	border: solid 1px white;
}

.task .actions button:hover {
	opacity: 0.8;
}

.task .actions button:active {
	opacity: 0.6;
}


.task .actions .delete {
	color: rgb(255, 8, 58);
}