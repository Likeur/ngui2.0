const vehiculeBtn1ab = document.querySelector('.vehiculebtnab')
const vehiculeBtn2ab = document.querySelector('.vehiculebtn2ab')
const dropdownab = document.querySelector('.dropdownab')

  vehiculeBtn1ab.addEventListener('click', () => {

    dropdownab.classList.toggle('lg:scale-0')
  })
  vehiculeBtn2ab.addEventListener('click', () => {

    dropdownab.classList.toggle('h-0')
    dropdownab.classList.toggle('p-4')
  })


  const btnToggleab = document.querySelector('.toggleMenuBtnab')
  const navab = document.querySelector('.navab')
  const barUnab = document.querySelector('.barUnab')
  const barDeuxab = document.querySelector('.barDeuxab')
  
  btnToggleab.addEventListener('click', ()=>{
    navab.classList.toggle('scale-0')
    barUnab.classList.toggle('rotate-45')
    barDeuxab.classList.toggle('-rotate-45')
    barUnab.classList.toggle('absolute')
    barUnab.classList.toggle('top-4')
    barDeuxab.classList.toggle('mb-2')
  })

  function getLenis(){
    const lenis = new Lenis()
  
    lenis.on('scroll', (e) => {
      console.log(e)
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
}

getLenis()