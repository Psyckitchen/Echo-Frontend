'use client'
import { useRef, useEffect } from "react"

const Page = ( {children, className} ) => {
	const pageRef = useRef(null)

	// page visible animation
	useEffect(() => {
		window.addEventListener("scroll", ()=>{
			if (!pageRef.current.classList.contains("page-visible") && isVisible(pageRef.current)) {
				pageRef.current.classList.add("page-visible")
			}
		})
	}, [])
	
	// reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
	const isVisible = (element) => {
		const rect = element.getBoundingClientRect();
		return rect.top <= window.innerHeight;
	}
	
	return (
		<div className={`page ${className}`} ref={pageRef}>
			{children}
		</div>
	)
}

export default Page