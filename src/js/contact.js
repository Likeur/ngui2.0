const vehiculeBtn1cn = document.querySelector('.vehiculebtncn')
  const vehiculeBtn2cn = document.querySelector('.vehiculebtn2cn')
  const dropdowncn = document.querySelector('.dropdowncn')

  vehiculeBtn1cn.addEventListener('click', () => {

    dropdowncn.classList.toggle('lg:opacity-0')
    dropdowncn.classList.toggle('lg:translate-y-5')
  })
  vehiculeBtn2cn.addEventListener('click', () => {

    dropdowncn.classList.toggle('h-0')
    dropdowncn.classList.toggle('p-4')
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