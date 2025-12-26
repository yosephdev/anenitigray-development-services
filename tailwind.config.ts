
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// ADS NGO Custom Colors - Youth-Led Solar Energy Theme
				'tigray-terracotta': '#C45E40',
				'tigray-ochre': '#DBAE58',
				'tigray-green': '#4F6F52',
				'tigray-brown': '#8B5A2B',
				'tigray-sand': '#E7D7C1',
				'tigray-light': '#FDF5E6',
				'tigray-dark': '#2C2C2C',
				tigray: {
					terracotta: '#C45E40',
					ochre: '#DBAE58',
					green: '#4F6F52',
					brown: '#8B5A2B',
					sand: '#E7D7C1',
					light: '#FDF5E6',
					dark: '#2C2C2C'
				},
				// Solar Energy & Youth Theme Colors
				solar: {
					yellow: '#FDB813',
					gold: '#F39C12',
					orange: '#E67E22',
					bright: '#FFD93D',
					dark: '#D68910'
				},
				energy: {
					green: '#27AE60',
					light: '#52D273',
					dark: '#229954',
					mint: '#A8E6CF',
					forest: '#1E8449'
				},
				youth: {
					blue: '#3498DB',
					purple: '#9B59B6',
					pink: '#E91E63',
					teal: '#16A085',
					indigo: '#5D3FD3'
				},
				dungo: {
					primary: '#FDB813',
					secondary: '#27AE60',
					accent: '#3498DB'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'slide-in': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out'
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'opensans': ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: [
		tailwindcssAnimate,
		tailwindcssTypography
	]
} satisfies Config;
