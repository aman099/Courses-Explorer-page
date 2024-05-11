import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "overlay",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "overlay2",
			},
		},
		{
			tag: "nav",
			attributes: {
				id: "nav",
				class: "",
			},
			children: [
				{
					tag: "header",
					children: [
						{
							tag: "div",
							attributes: {
								class: "logo-img-container",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "hamburger-icon",
									},
									children: [
										{
											tag: "span",
										},
										{
											tag: "span",
										},
										{
											tag: "span",
										},
										{
											tag: "span",
											attributes: {
												class: "hidden-span-hammy",
											},
										},
									],
								},
								{
									tag: "span",
									attributes: {
										class: "img-span",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/Luma-logo.svg",
												alt: "Luma logo",
											},
										},
									],
								},
								{
									tag: "h2",
									content: "Luma",
								},
							],
						},
						{
							tag: "ul",
							children: [
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											content: "Home",
										},
									],
								},
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											content: "Courses",
										},
									],
								},
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											content: "Paths",
										},
									],
								},
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											content: "Pricing",
										},
									],
								},
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											content: "Teachers",
										},
									],
								},
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-users",
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "input",
					attributes: {
						type: "checkbox",
						id: "nav-check",
					},
				},
				{
					tag: "div",
					attributes: {
						class: "nav-btn",
					},
					children: [
						{
							tag: "label",
							attributes: {
								for: "nav-check",
							},
							children: [
								{
									tag: "span",
								},
								{
									tag: "span",
								},
								{
									tag: "span",
								},
							],
						},
					],
				},
				{
					tag: "ul",
					attributes: {
						class: "right-ul",
					},
					children: [
						{
							tag: "li",
							children: [
								{
									tag: "div",
									attributes: {
										class: "input-container",
									},
									children: [
										{
											tag: "span",
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-magnifying-glass",
													},
												},
											],
										},
										{
											tag: "input",
											attributes: {
												type: "text",
												placeholder: "Search..",
											},
										},
									],
								},
							],
						},
						{
							tag: "li",
							attributes: {
								class: "lock",
							},
							children: [
								{
									tag: "a",
									attributes: {
										href: "#",
									},
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-lock",
											},
										},
									],
								},
							],
						},
						{
							tag: "li",
							children: [
								{
									tag: "button",
									attributes: {
										class: "outlined-btn",
									},
									content: "Get Started",
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				id: "luma-container",
			},
			children: [
				{
					tag: "aside",
					attributes: {
						id: "aside",
						class: "aside1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								class: "sidebar-nav",
							},
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
														class: "title",
													},
													content: "Student",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-house",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Home",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-book-open-reader",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Browse Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-mobile",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Browse Paths",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-user",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Student Dashboard",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-magnifying-glass",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "My Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-chart-line",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "My Paths",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-bezier-curve",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Path Details",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-regular fa-face-smile",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Course Preview",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-regular fa-circle",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Lesson Preview",
												},
											],
										},
										{
											tag: "li",
											attributes: {
												class: "abs-menu",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-regular fa-circle",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Take Course",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-book-open",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Take Lesson",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-tv",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Take Quiz",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-chart-simple",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "My Quizzes",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-rocketchat",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Quiz Result",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-layer-group",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Skill Assessment",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-square-check",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Skill Result",
												},
											],
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
														class: "title",
													},
													content: "Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-graduation-cap",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Instructor Dashboard",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-book-open",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Manage Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-question",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Manage Quizzes",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-arrow-up-right-dots",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Earnings",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-regular fa-note-sticky",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Statement",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-book-bookmark",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Edit Course",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-bezier-curve",
															},
														},
													],
												},
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Edit Quiz",
												},
											],
										},
									],
								},
								{
									tag: "ul",
									attributes: {
										class: "dropdown-ul",
									},
									children: [
										{
											tag: "li",
											attributes: {
												class: "title",
											},
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
														class: "title",
													},
													content: "Applications",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Enterprise",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-1",
													},
													children: [
														{
															tag: "li",
															content: "ERP Dashboard",
														},
														{
															tag: "li",
															content: "CRM Dashboard",
														},
														{
															tag: "li",
															content: "HR Dashboard",
														},
														{
															tag: "li",
															content: "Employees",
														},
														{
															tag: "li",
															content: "Self",
														},
														{
															tag: "li",
															content: "Leaves",
														},
														{
															tag: "li",
															attributes: {
																class: "last-reveal-opt",
															},
															content: "Departments",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Productivity",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-2",
													},
													children: [
														{
															tag: "li",
															content: "Projects",
														},
														{
															tag: "li",
															content: "Tasks Board",
														},
														{
															tag: "li",
															content: "Tasks List",
														},
														{
															tag: "li",
															attributes: {
																class: "last-reveal-opt",
															},
															content: "Kanban",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Enterprise",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-3",
													},
													children: [
														{
															tag: "li",
															content: "Shop Dashboard",
														},
														{
															tag: "li",
															attributes: {
																class: "last-reveal-opt",
															},
															content: "Edit Product",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Messaging",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-4",
													},
													children: [
														{
															tag: "li",
															content: "Messages",
														},
														{
															tag: "li",
															content: "Email",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "CMS",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-5",
													},
													children: [
														{
															tag: "li",
															content: "CMS Dashboard",
														},
														{
															tag: "li",
															content: "Posts",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Account",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-6",
													},
													children: [
														{
															tag: "li",
															content: "Pricing",
														},
														{
															tag: "li",
															content: "Login",
														},
														{
															tag: "li",
															content: "Signup",
														},
														{
															tag: "li",
															content: "Payment",
														},
														{
															tag: "li",
															content: "Reset Password",
														},
														{
															tag: "li",
															content: "Change Password",
														},
														{
															tag: "li",
															content: "Edit Account",
														},
														{
															tag: "li",
															content: "Profile & Privacy",
														},
														{
															tag: "li",
															content: "Email Notifications",
														},
														{
															tag: "li",
															content: "Account Password",
														},
														{
															tag: "li",
															content: "Subscription",
														},
														{
															tag: "li",
															content: "Upgrade Account",
														},
														{
															tag: "li",
															content: "Payment Information",
														},
														{
															tag: "li",
															content: "Payment History",
														},
														{
															tag: "li",
															content: "Invoice",
														},
														{
															tag: "li",
															attributes: {
																class: "last-reveal-opt",
															},
															content: "Edit Account",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "revealer",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "drop-instigater",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "menus-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-gauge",
																			},
																		},
																	],
																},
																{
																	tag: "a",
																	attributes: {
																		href: "#",
																	},
																	content: "Community",
																},
															],
														},
														{
															tag: "span",
															attributes: {
																class: "chevron-ri8",
															},
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-chevron-right",
																	},
																},
															],
														},
													],
												},
												{
													tag: "ul",
													attributes: {
														class: "reveal reveal-7",
													},
													children: [
														{
															tag: "li",
															content: "Browse Teachers",
														},
														{
															tag: "li",
															content: "Student Profile",
														},
														{
															tag: "li",
															content: "Teacher Profile",
														},
														{
															tag: "li",
															content: "Blog",
														},
														{
															tag: "li",
															content: "Blog Post",
														},
														{
															tag: "li",
															content: "FAQ",
														},
														{
															tag: "li",
															content: "Help Center",
														},
														{
															tag: "li",
															content: "Discussions",
														},
														{
															tag: "li",
															content: "Discussion Details",
														},
														{
															tag: "li",
															content: "Ask Questions",
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "main",
					attributes: {
						id: "main",
						class: "container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								class: "hero",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "hero-container",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "title-container",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "left",
													},
													children: [
														{
															tag: "p",
															content: "Displaying 4 out of 10 courses",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "right",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "title-cont-para",
															},
															children: [
																{
																	tag: "p",
																	content: "Sort by",
																},
																{
																	tag: "p",
																	content:
																		'Newest <span><i class="fa-solid fa-sort"></i></span>',
																},
																{
																	tag: "p",
																	content:
																		'Popularity <span><i class="fa-solid fa-sort"></i></span>',
																},
															],
														},
														{
															tag: "button",
															attributes: {
																class: "filter-btn",
															},
															content:
																'<span><i class="fa-solid fa-filter"></i></span> Filters',
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "courses popular-courses",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "courses-title",
													},
													children: [
														{
															tag: "h5",
															content: "popular courses",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "tdc-cards-container flex-center",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "tdc-card tdc-card-1",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-cont",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/card-1.png",
																			},
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "preview-abs",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-circle-play",
																							},
																						},
																					],
																				},
																				{
																					tag: "p",
																					content: "Preview",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-info",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"Newsletter Design <span><span class='tdc-teacher'>Elijah Murray</span><span class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-regular fa-star'></i></span></span>",
																		},
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-regular fa-heart",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "tdc-card tdc-card-2",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-cont",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/card-2.png",
																			},
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "preview-abs",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-circle-play",
																							},
																						},
																					],
																				},
																				{
																					tag: "p",
																					content: "Preview",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-info",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"Adobe XD <span><span class='tdc-teacher'>Elijah Murray</span><span class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-regular fa-star'></i></span></span>",
																		},
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-regular fa-heart",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "tdc-card tdc-card-3",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-cont",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/card-3.png",
																			},
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "preview-abs",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-circle-play",
																							},
																						},
																					],
																				},
																				{
																					tag: "p",
																					content: "Preview",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-info",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"inVision App <span><span class='tdc-teacher'>Elijah Murray</span><span class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-regular fa-star'></i></span></span>",
																		},
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-regular fa-heart",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "tdc-card tdc-card-4",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-cont",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/card-4.png",
																			},
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "preview-abs",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-regular fa-circle-play",
																							},
																						},
																					],
																				},
																				{
																					tag: "p",
																					content: "Preview",
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "tdc-img-info",
																	},
																	children: [
																		{
																			tag: "p",
																			content:
																				"Craft by inVision <span><span class='tdc-teacher'>Elijah Murray</span><span class='stars'><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-regular fa-star'></i></span></span>",
																		},
																		{
																			tag: "span",
																			children: [
																				{
																					tag: "i",
																					attributes: {
																						class: "fa-regular fa-heart",
																					},
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "pagination",
													},
													children: [
														{
															tag: "p",
															content:
																"<span class='left-chev'><i class='fa-solid fa-angle-left'></i> prev</span><span class='hr'>|</span> 1<span class='hr'>|</span> 2<span class='hr'>|</span><span class='right-chev'>next <i class='fa-solid fa-angle-right'></i></i></span>",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "courses development-courses",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "courses-title",
													},
													children: [
														{
															tag: "h5",
															content: "development courses",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "course-cards",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "course course-1",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/angular.png",
																				alt: "Angular Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			children: [
																				{
																					tag: "h5",
																					content:
																						"Learn Angular <br> fundamentals</h5><span><i class='fa-regular fa-heart'></i></span>",
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "course course-2",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/wordpress.png",
																				alt: "Angular Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Build an iOS <br> application in Swift</h5><span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "course course-3",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/swift.png",
																				alt: "Angular Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Build a Wordpress <br> Website</h5><span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "course course-4",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/react.png",
																				alt: "React Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Become a React <br> Native Developer</h5> <span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "pagination",
													},
													children: [
														{
															tag: "p",
															content:
																"<span class='left-chev'><i class='fa-solid fa-angle-left'></i> prev</span><span class='hr'>|</span> 1<span class='hr'>|</span> 2<span class='hr'>|</span><span class='right-chev'>next <i class='fa-solid fa-angle-right'></i></i></span>",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "courses design-courses",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "courses-title",
													},
													children: [
														{
															tag: "h5",
															content: "design courses",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "course-cards",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "course course-1",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/sketch.png",
																				alt: "Sketch Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Learn Sketch</h5><span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "course course-2",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/flint.png",
																				alt: "Flint Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Learn Sketch</h5><span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "course course-3",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/ps.png",
																				alt: "Photoshop Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Learn Photoshop</h5><span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "course course-4",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "img-container",
																	},
																	children: [
																		{
																			tag: "img",
																			attributes: {
																				src: "./assets/figma.png",
																				alt: "Figma Logo",
																			},
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "card-info",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "info-header",
																			},
																			content:
																				"<h5>Learn Figma</h5><span><i class='fa-regular fa-heart'></i></span>",
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-hidden",
																			},
																			children: [
																				{
																					tag: "p",
																					content: "Elijah Murray",
																				},
																				{
																					tag: "div",
																					attributes: {
																						class: "info-desc",
																					},
																					children: [
																						{
																							tag: "div",
																							attributes: {
																								class: "stars",
																							},
																							content:
																								"<span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-solid fa-star'></i></span><span><i class='fa-regular fa-star'></i></span>",
																						},
																					],
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "info-content",
																			},
																			children: [
																				{
																					tag: "div",
																					content:
																						"<div class='time'><span><i class='fa-regular fa-clock'></i></span>&nbsp; 6 hours</div><div class='lessons'><span><i class='fa-regular fa-circle-play'></i></span>&nbsp; 12 lessons</div>",
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "pagination",
													},
													children: [
														{
															tag: "p",
															content:
																"<span class='left-chev'><i class='fa-solid fa-angle-left'></i> prev</span><span class='hr'>|</span> 1<span class='hr'>|</span> 2<span class='hr'>|</span><span class='right-chev'>next <i class='fa-solid fa-angle-right'></i></i></span>",
														},
													],
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "footer",
							attributes: {
								id: "footer",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "footer-container container is-fullhd",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "footer-left",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "footer-logo",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/luma-footer-logo.png",
																alt: "Luma logo",
															},
														},
														{
															tag: "h2",
															content: "Luma",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "footer-para",
													},
													children: [
														{
															tag: "p",
															content:
																"Luma is a beautifully crafted user interface for modern Education Platforms, including Courses &Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "copyright",
													},
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Terms",
														},
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Privacy Policy",
														},
														{
															tag: "p",
															content: "Copyright 2019 &copy; All rights reserved",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "footer-right",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "aside",
			attributes: {
				id: "aside",
				class: "aside-2",
			},
			children: [
				{
					tag: "nav",
					attributes: {
						class: "sidebar-nav sidebar-nav-2",
					},
					children: [
						{
							tag: "ul",
							children: [
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												class: "title",
												href: "#",
											},
											content: "Student",
										},
									],
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-solid fa-code'></i></span><a href='#''>Web Development</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-solid fa-book-open-reader'></i></span><a href='#''>Design</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-brands fa-apple'></i></span><a href='#''>iOS & Swift</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-brands fa-android'></i></span><a href='#''>Android</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-solid fa-briefcase'></i></span><a href='#''>Business</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-regular fa-image'></i></span><a href='#''>Photography</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-solid fa-shop'></i></span><a href='#''>Marketing</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-solid fa-cash-register'></i></span><a href='#''>eCommerce</a>",
								},
								{
									tag: "li",
									content:
										"<span><i class='fa-solid fa-dumbbell'></i></span><a href='#''>Health & Fitness</a>",
								},
								{
									tag: "li",
									attributes: {
										class: "abs-menu",
									},
									content:
										"<span><i class='fa-solid fa-music'></i></span><a href='#''>Music</a>",
								},
							],
						},
						{
							tag: "ul",
							children: [
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
												class: "title",
											},
											content: "Platform",
										},
									],
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' checked id='all'> <label for='all'>All</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='archive'> <label for='archive'>Archive</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='unity'> <label for='unity'>Unity</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='web'> <label for='web'>Web</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='iOS'> <label for='iOS'>iOS & Swift</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='android'> <label for='android'>Android</label>",
								},
							],
						},
						{
							tag: "ul",
							attributes: {
								class: "subscription-ul",
							},
							children: [
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
												class: "title",
											},
											content: "Subscription",
										},
									],
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' checked id='all-2'> <label for='all-2'>All</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='free'> <label for='free'>Free</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='beginner'> <label for='beginner'>Beginner</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='advanced'> <label for='advanced'>Advanced</label>",
								},
							],
						},
						{
							tag: "ul",
							attributes: {
								class: "dropdown-ul",
							},
							children: [
								{
									tag: "li",
									children: [
										{
											tag: "a",
											attributes: {
												href: "#",
												class: "title",
											},
											content: "Content Type",
										},
									],
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' checked id='all-3'> <label for='all-3'>All</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='episode'> <label for='episode'>Episode</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='video'> <label for='video'>Video</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='article'> <label for='article'>Article</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='book'> <label for='book'>Book</label>",
								},
								{
									tag: "li",
									content:
										"<input type='checkbox' id='screencast'> <label for='screencast'>Screencast</label>",
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
