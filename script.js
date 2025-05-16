// Sinf va fanlar ro'yxati ob'ekti: har bir sinf uchun fan nomi va Google Forms havolasi
const classSubjects = {
	// '5-A-Sinf': [
	// 	{ name: 'Tarixdan hikoyalar', link: 'https://forms.gle/4FaYJDR9yr8XM4JXA' },
	// 	{
	// 		name: 'Onatili va adabiyot',
	// 		link: 'https://forms.gle/3b9pGN8SRPzxnZNZ8',
	// 	},
	// 	{ name: '1-gurux Rustili', link: 'https://forms.gle/cEA9FbbreaY368J98' },
	// 	{
	// 		name: 'Informatika 1-gurux',
	// 		link: 'https://forms.gle/e34nkJmWBgHZXd8w7',
	// 	},
	// 	{
	// 		name: 'Informatika 2-gurux',
	// 		link: 'https://forms.gle/1fmztBDL2w3Qhp8w6',
	// 	},
	// ],
	// '5-F-Sinf': [
	// 	{
	// 		name: 'Onatili va adabiyot',
	// 		link: 'https://forms.gle/ze4v96hpPzPynUH8A',
	// 	},
	// ],
	// '5-E-Sinf': [
	// 	{ name: 'Tabiiy fan', link: 'https://forms.gle/pFf5ZcZG5GLZcdebA' },
	// 	{ name: 'Ingliz tili', link: 'https://forms.gle/pBkBcK6QsRRPChRC6' },
	// ],
	// '5-G-Sinf': [
	// 	{ name: 'Matematika', link: 'https://forms.gle/ELb8HtVBrTGri9LYA' },
	// ],
	// '5-D-Sinf': [
	// 	{
	// 		name: 'Onatili va adabiyot',
	// 		link: 'https://forms.gle/DHTT5ySDAn5rgeo1A',
	// 	},
	// 	{ name: 'Matematika', link: 'https://forms.gle/Ln7daKovCiAuKrRv8' },
	// 	{ name: 'Ingliz tili', link: 'https://forms.gle/rFHttuxoMZD2XgFa9' },
	// ],
	// '6-B-Sinf': [
	// 	{ name: 'Ingliz tili', link: 'https://forms.gle/hKKbQTWGBnam1NyN7' },
	// 	{ name: 'Matematika', link: 'https://forms.gle/yDySW3xbKXXrVM639' },
	// 	{ name: 'Tarix', link: 'https://forms.gle/3wszbqQts349h6fN7' },
	// 	{
	// 		name: 'Informatika 1-gurux',
	// 		link: 'https://forms.gle/QE2qKfg1pUosWfYx5',
	// 	},
	// 	{
	// 		name: 'Informatika 2-gurux',
	// 		link: 'https://forms.gle/gpNwh4nMnHhJYcm97',
	// 	},
	// ],
	// '8-B-Sinf': [
	// 	{ name: 'Ingliz tili', link: 'https://forms.gle/YVT296jEGuHKk4Qw5' },
	// 	{ name: 'Kimyo', link: 'https://forms.gle/cjkGHTDpgKC8x1eg9' },
	// { name: 'Matematika', link: 'https://forms.gle/cuoAbTnVsiUUqdS48' },
	// ],
	// '7-D-Sinf': [
	// 	{ name: 'Biologiya', link: 'https://forms.gle/ykAZaMaubUcd5og19' },
	// ],
	'7-E-Sinf': [
		{ name: 'Fizika', link: 'https://forms.gle/iNGD9QYo31j5kR5V6' },
		{
			name: 'Onatili va adabiyot',
			link: 'https://forms.gle/gdcEYaX2euMbRZB37',
		},
		{ name: 'Ingliz tili', link: 'https://forms.gle/G5rXtug8d7XkbsLF8' },
	],
	// '7-G-Sinf': [
	// 	{ name: 'Matematika', link: 'https://forms.gle/ay1mfEHhFGhYy15s7' },
	// ],
	'7-A-Sinf': [
		{ name: '2-gurux Rustili', link: 'https://forms.gle/7CKXh6jPA2gjnGCc9' },
		// 	{ name: 'Ingliz tili', link: 'https://forms.gle/rgfqaw3t9Xxou8ud8' },
	],
	// '8-A-Sinf': [
	// 	{ name: 'Tarbiy', link: 'https://forms.gle/EMNw8MaZQHAKSHaK8' },
	// 	{ name: 'Fizika', link: 'https://forms.gle/T1XQJHcJjSAnwqbHA' },
	// 	{ name: 'Kimyo', link: 'https://forms.gle/ZFf8QoLQdCMWbYtv5' },
	// 	{ name: 'O`zbekiston tarixi', link: 'https://forms.gle/Pwf5zFgkZFv6VoAG6' },
	// ],
	'8-E-Sinf': [
		{ name: 'Geografiya', link: 'https://forms.gle/cwUrzDcfsA7KKQJU7' },
	],
	'8-D-Sinf': [
		{ name: '1-Gurux Rustili', link: 'https://forms.gle/5ougpivHbjEicvNo9' },
		{
			name: 'Onatili va adabiyot',
			link: 'https://forms.gle/caHS3hMWbLV7tX7QA',
		},
	],
	// '9-A-Sinf': [
	// 	{
	// 		name: 'Ingliz tili 1-variant',
	// 		link: 'https://forms.gle/scp87WbH8oFwdvox8',
	// 	},
	// 	{
	// 		name: 'Ingliz tili 2-variant',
	// 		link: 'https://forms.gle/nSZfL8vczwKws3RPA',
	// 	},
	// ],
	// '9-B-Sinf': [
	// { name: 'Fizika 1-variant', link: 'https://forms.gle/eXNjGYX41g8i1CPX9' },
	// { name: 'Fizika 2-variant', link: 'https://forms.gle/pyYCDpXh3GMHhKas6' },
	// {
	// 	name: 'Onatili va Adabiyot 1-variant',
	// 	link: 'https://forms.gle/VFVVbtvPAicJS8FH8',
	// },
	// {
	// 	name: 'Onatili va Adabiyot 2-variant',
	// 	link: 'https://forms.gle/PsLZ2R9VfGH5NsaZ8',
	// },
	// { name: 'Tarix 1-variant', link: 'https://forms.gle/FLg3hUtBbZHfwsc57' },
	// { name: 'Tarix 2-variant', link: 'https://forms.gle/FrKgAp6G1SECHrcK6' },
	// {
	// 	name: 'Matematika 1-variant',
	// 	link: 'https://forms.gle/CZahy9XUB2DLo498 orgasmus9',
	// },
	// {
	// 	name: 'Matematika 2-variant',
	// 	link: 'https://forms.gle/7fcqdUs4ceXiJu1LA',
	// },
	// ],
	// '9-G-Sinf': [
	// 	{
	// 		name: 'Matematika 1-variant',
	// 		link: 'https://forms.gle/Tcwkb18AZzvjXgzH7',
	// 	},
	// 	{
	// 		name: 'Matematika 2-variant',
	// 		link: 'https://forms.gle/qqDNPv2Wof4hhY5m8',
	// 	},
	// ],
	// '10-A-Sinf': [
	// 	{
	// 		name: 'O`zbekiston tarixi 1-variant',
	// 		link: 'https://forms.gle/jdnkuHKrjujmqVxj6',
	// 	},
	// 	{
	// 		name: 'O`zbekiston tarixi 2-variant',
	// 		link: 'https://forms.gle/vUPFEtrvu5Y435yh9',
	// 	},
	// 	{
	// 		name: '1-gurux Rustili 1-variant',
	// 		link: 'https://forms.gle/vzt4YouN4JpAYcd48',
	// 	},
	// 	{
	// 		name: '2-gurux Rustili 2-variant',
	// 		link: 'https://forms.gle/QcZej1v3CQ3d2HdDA',
	// 	},
	// ],
	// '10-B-Sinf': [
	// 	{
	// 		name: 'Ingliz tili 1-variant',
	// 		link: 'https://forms.gle/v2L9VwxXYHMXaJNt5',
	// 	},
	// 	{
	// 		name: 'Ingliz tili 2-variant',
	// 		link: 'https://forms.gle/E654TaJDpivteyd59',
	// 	},
	// 	{
	// 		name: 'Geografiya 1-variant',
	// 		link: 'https://forms.gle/RowEsDxeFMCdQuq78',
	// 	},
	// 	{
	// 		name: 'Geografiya 2-variant',
	// 		link: 'https://forms.gle/Qfqm9m62eP5YF4Hj8',
	// 	},
	// 	{
	// 		name: 'Matematika 1-variant',
	// 		link: 'https://forms.gle/vqajakbFXKr3D9kY9',
	// 	},
	// 	{
	// 		name: 'Matematika 2-variant',
	// 		link: 'https://forms.gle/uryLerFVwgiJo1Kb8',
	// 	},
	// 	{
	// 		name: 'Onatili va Adabiyot 1-variant',
	// 		link: 'https://forms.gle/Zm5zxpLY6dpyNe1m8',
	// 	},
	// 	{
	// 		name: 'Onatili va Adabiyot 2-variant',
	// 		link: 'https://forms.gle/6gfkimPshuDvuMCDA',
	// 	},
	// ],
	'11-A-Sinf': [
		{
			name: 'Ingliz tili 1-variant',
			link: 'https://forms.gle/eHabhBRqy1A3uizN9',
		},
		{
			name: 'Ingliz tili 2-variant',
			link: 'https://forms.gle/dgirGuwGCfcknsNx8',
		},
	],
	// '11-B-Sinf': [
	// 	{
	// 		name: 'Onatili va adabiyot 1-variant',
	// 		link: 'https://forms.gle/2PG8XAKX4LrAUj699',
	// 	},
	// 	{
	// 		name: 'Onatili va adabiyot 2-variant',
	// 		link: 'https://forms.gle/rbkfwQ3HYmgGUCcw6',
	// 	},
	// 	{
	// 		name: 'Matematika 1-variant',
	// 		link: 'https://forms.gle/DyFkHrLYPWs9vr4t5',
	// 	},
	// 	{
	// 		name: 'Matematika 2-variant',
	// 		link: 'https://forms.gle/pnjcKH4ENXwMaNfx9',
	// 	},
	// 	{ name: 'Tarbiya 1-variant', link: 'https://forms.gle/6rFL1pZ3r1wZVnxEA' },
	// 	{ name: 'Tarbiya 2-variant', link: 'https://forms.gle/Em1qCSVsh5YeZaXh7' },
	// ],
}

// Sinflar uchun parollar ob'ekti
const classPasswords = {
	// '5-A-Sinf': '5asinf5',
	// '5-F-Sinf': '5fsinf5',
	// '5-E-Sinf': '5esinf5',
	// '5-G-Sinf': '5gsinf5',
	// '5-D-Sinf': '5dsinf5',
	// '6-B-Sinf': '6bsinf6',
	// '8-B-Sinf': '8bsinf8',
	// '7-D-Sinf': '7dsinf7',
	'7-E-Sinf': '7esinf7',
	// '7-G-Sinf': '7gsinf7',
	'7-A-Sinf': '7asinf7',
	// '8-A-Sinf': '8asinf8',
	'8-E-Sinf': '8esinf8',
	'8-D-Sinf': '8dsinf8',
	// '9-A-Sinf': '9asinf9',
	// '9-B-Sinf': '9bsinf9',
	// '9-G-Sinf': '9gsinf9',
	// '10-A-Sinf': '10asinf10',
	// '10-B-Sinf': '10bsinf10',
	'11-A-Sinf': '11asinf11',
	// '11-B-Sinf': '11bsinf11',
}

// HTML elementlarini JavaScript orqali olish
const classSelect = document.getElementById('classSelect') // Sinf tanlash dropdown
const subjectsDiv = document.getElementById('subjects') // Fanlar ro'yxati div
const notification = document.getElementById('notification') // Notifikatsiya oynasi
const passwordModal = document.getElementById('passwordModal') // Parol kiritish modal
const passwordInput = document.getElementById('passwordInput') // Parol input maydoni
const dateSpan = document.getElementById('date') // Sana ko'rsatuvchi element
const timeSpan = document.getElementById('time') // Vaqt ko'rsatuvchi element
const loader = document.getElementById('loader') // Loading animatsiyasi elementi

// Joriy holatni saqlash uchun o'zgaruvchilar
let currentLink = '' // Tanlangan test havolasi
let currentClass = '' // Tanlangan sinf
let currentSubject = '' // Tanlangan fan

// Sana va vaqtni yangilash funksiyasi
function updateDateTime() {
	const now = new Date()
	const months = [
		'yanvar',
		'fevral',
		'mart',
		'aprel',
		'may',
		'iyun',
		'iyul',
		'avgust',
		'sentyabr',
		'oktyabr',
		'noyabr',
		'dekabr',
	]
	const day = now.getDate()
	const month = months[now.getMonth()]
	const year = now.getFullYear()
	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')
	const seconds = String(now.getSeconds()).padStart(2, '0')
	dateSpan.textContent = `${day}-${month} ${year}-yil`
	timeSpan.textContent = `${hours}:${minutes}:${seconds}`
}

// Notifikatsiya ko'rsatish funksiyasi
function showNotification(message, type) {
	// Notifikatsiya ikonkalari
	const icons = {
		error:
			'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',
		success:
			'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
		info: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
	}
	notification.innerHTML = `${icons[type]} ${message}` // Xabar va ikonka qo'shish
	notification.className = `notification ${type}` // Notifikatsiya turini belgilash
	notification.classList.add('show') // Ko'rsatish
	setTimeout(() => {
		notification.classList.remove('show') // 2 soniyadan keyin yashirish
	}, 2000)
}

// Testning ishlanganligini tekshirish
function isTestTaken(className, subjectName) {
	return localStorage.getItem(`test_${className}_${subjectName}`) === 'taken'
}

// Testni ishlangan deb belgilash
function markTestAsTaken(className, subjectName) {
	localStorage.setItem(`test_${className}_${subjectName}`, 'taken')
}

// Test holatini localStorage'dan o'chirish
function clearTestFromStorage(className, subjectName) {
	localStorage.removeItem(`test_${className}_${subjectName}`)
}

// Tashqi havolalarni tekshirish funksiyasi
async function checkLinks(links) {
	// Barcha havolalarni parallel tekshirish
	const results = await Promise.all(
		links.map(async link => {
			try {
				// Havolaga HEAD so'rov yuborish
				const response = await fetch(link, { method: 'HEAD', mode: 'no-cors' })
				return { link, status: 'ok' }
			} catch (error) {
				return { link, status: 'error' } // Xato bo'lsa
			}
		})
	)
	return results
}

// Fanlarni ko'rsatish funksiyasi (internetga bog'langan)
async function displaySubjects(className) {
	// Loading animatsiyasini ko'rsatish
	subjectsDiv.innerHTML =
		'<div id="loader" class="loader show"><div></div><div></div><div></div></div>'
	// Agar sinf tanlanmagan yoki mavjud bo'lmasa
	if (!className || !classSubjects[className]) {
		loader.classList.remove('show') // Loadingni o'chirish
		subjectsDiv.innerHTML = `
					<p class="text-gray-500 flex items-center">
							<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
							Iltimos, sinfni tanlang.
					</p>`
		return
	}

	const subjects = classSubjects[className] // Tanlangan sinf fanlari
	const links = subjects.map(subject => subject.link) // Fan havolalari
	const linkResults = await checkLinks(links) // Havolalarni tekshirish

	// Xato bo'lgan havolalarni aniqlash
	const failedLinks = linkResults.filter(result => result.status === 'error')
	if (failedLinks.length > 0) {
		showNotification(
			"Ba'zi testlar yuklanmadi, internetni tekshiring!",
			'error'
		)
	}

	loader.classList.remove('show') // Loadingni o'chirish
	subjectsDiv.innerHTML = '' // Fanlar ro'yxatini tozalash

	// Har bir fan uchun karta yaratish
	subjects.forEach(subject => {
		const isTaken = isTestTaken(className, subject.name) // Test ishlanganmi?
		const card = document.createElement('div')
		card.className = 'subject-card'
		card.innerHTML = `
					<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
					<div class="flex-1">
							<h5 class="text-lg font-medium text-gray-800">${subject.name}</h5>
							<div class="mt-2 flex gap-2">
									<button class="btn btn-primary start-btn flex items-center text-white relative" 
													${isTaken ? 'disabled' : ''} 
													onclick="openPasswordModal('${subject.link}', '${className}', '${
			subject.name
		}')">
											<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
											Testni boshlash
									</button>
									<button class="btn clear-btn flex items-center text-white" 
													onclick="clearTestFromStorage('${className}', '${
			subject.name
		}'); showNotification('Test holati tozalandi!', 'success'); displaySubjects('${className}')">
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
									</button>
							</div>
					</div>
			`
		subjectsDiv.appendChild(card) // Kartani ro'yxatga qo'shish
	})
}

// Parol kiritish modalini ochish (test boshlash uchun)
function openPasswordModal(link, className, subjectName) {
	if (isTestTaken(className, subjectName)) {
		showNotification('Bu test allaqachon ishlab bo‘lingan!', 'error')
		return
	}
	currentLink = link // Joriy havolani saqlash
	currentClass = className // Joriy sinfni saqlash
	currentSubject = subjectName // Joriy fanni saqlash
	passwordModal.style.display = 'flex' // Modalni ko'rsatish
	passwordModal.classList.add('show') // Animatsiyani qo'shish
	passwordInput.value = '' // Inputni tozalash
	passwordInput.focus() // Inputga fokus qo'yish
}

// Modalni yopish funksiyasi
function closeModal() {
	passwordModal.classList.remove('show') // Animatsiyani olib tashlash
	setTimeout(() => {
		passwordModal.style.display = 'none' // 200ms dan keyin yashirish
	}, 200)
}

// Parolni tasdiqlash funksiyasi
function submitPassword() {
	const password = passwordInput.value
	// Testni boshlash
	const enteredPassword = password.toLowerCase()
	const correctPassword = classPasswords[currentClass].toLowerCase()
	if (enteredPassword === correctPassword) {
		markTestAsTaken(currentClass, currentSubject) // Testni belgilash
		window.open(currentLink, '_blank') // Havolani yangi oynada ochish
		closeModal() // Modalni yopish
		showNotification('Test boshlandi!', 'success')
		displaySubjects(currentClass) // Ro'yxatni yangilash
	} else {
		showNotification('Parol xato!', 'error')
		passwordInput.value = ''
	}
}

// Sinf tanlanganda fanlarni ko'rsatish
classSelect.addEventListener('change', e => {
	const selectedClass = e.target.value
	displaySubjects(selectedClass) // Fanlarni yuklash
})

// Modal foniga bosilganda uni yopish
passwordModal.addEventListener('click', e => {
	if (e.target === passwordModal) {
		closeModal()
	}
})

// Ilovani ishga tushirish
displaySubjects('') // Dastlab bo'sh ro'yxat
updateDateTime() // Sana va vaqtni yangilash
setInterval(updateDateTime, 1000) // Har soniyada yangilash
