"use client"

import axios from 'axios';
import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { toast } from 'react-toastify';

function ContactUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		comment: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (e) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setIsSubmitting(true);

		try {
			const response = await axios.post('http://localhost:5000/contact', formData); // adjust the URL if needed
			console.log('Server response:', response);



			if (response.data.success) {
				// Reset form on success
				setFormData({ name: '', email: '', phone: '', comment: '' });
				toast.success("Message submitted successfully!");
				// alert('Message submitted successfully!');
			}

		} catch (error) {
			console.error('Error submitting the contact_us form:', error);
			toast.error("Something went wrong in contact_us form. Please try again later.");
			// alert('Something went wrong in contact_us form. Please try again later.');
		}

		// try {
		// 	// Simulate API call
		// 	await new Promise(resolve => setTimeout(resolve, 1500));

		// 	console.log('Form submitted:', formData);
		// 	setSubmitSuccess(true);
		// 	setFormData({ name: '', email: '', phone: '', comment: '' });

		// 	// Reset success message after 5 seconds
		// 	setTimeout(() => setSubmitSuccess(false), 5000);
		// } catch (error) {
		// 	console.error('Error submitting form:', error);
		// } finally {
		// 	setIsSubmitting(false);
		// }
	};

	return (
		<div className="min-h-screen bg-gray-50 pt-20">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-700 to-blue-400 py-20 text-center text-white ">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
				<p className="text-xl max-w-2xl mx-auto px-4">
					We're here to help and answer any questions you might have.
				</p>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="bg-blue-100 p-3 rounded-full mr-4">
										<FaMapMarkerAlt className="text-blue-600 text-xl" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800">Our Location</h3>
										<p className="text-gray-600">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-green-100 p-3 rounded-full mr-4">
										<FaPhone className="text-green-600 text-xl" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800">Phone Number</h3>
										<p className="text-gray-600">+92 3099014620<br />Mon-Fri, 9am-5pm</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-purple-100 p-3 rounded-full mr-4">
										<FaEnvelope className="text-purple-600 text-xl" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800">Email Address</h3>
										<p className="text-gray-600">info@company.com<br />support@company.com</p>
									</div>
								</div>
							</div>

							<div className="mt-8">
								<h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
								<div className="flex space-x-4">
									<a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
										<FaFacebook />
									</a>
									<a href="#" className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition">
										<FaTwitter />
									</a>
									<a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition">
										<FaInstagram />
									</a>
									<a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition">
										<FaLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-white p-8 rounded-xl shadow-lg">
						<h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

						{submitSuccess && (
							<div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
								Thank you for your message! We'll get back to you soon.
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
									Full Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
									placeholder="John Doe"
								/>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
										Email Address <span className="text-red-500">*</span>
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
										placeholder="your@email.com"
									/>
								</div>

								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
										placeholder="03099014620"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
									Your Message <span className="text-red-500">*</span>
								</label>
								<textarea
									id="comment"
									name="comment"
									rows="5"
									value={formData.comment}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
									placeholder="How can we help you?"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={`cursor-pointer w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
							>
								{isSubmitting ? (
									'Sending...'
								) : (
									<>
										<FaPaperPlane className="mr-2" />
										Send Message
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="bg-gray-100 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Find Us on the Map</h2>
					<div className="bg-white p-4 rounded-xl shadow-lg">
						<div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
							{/* Replace with your actual map embed */}
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291432!2d-73.9878449241646!3d40.74844097138989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								title="Company Location"
							></iframe>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Note */}
			<div className="bg-slate-300 py-8 text-center">
				<p className="max-w-3xl mx-auto px-4">
					Your information is secure with us. We respect your privacy and will never share your details with third parties.
				</p>
			</div>
		</div>
	);
}

export default ContactUs;