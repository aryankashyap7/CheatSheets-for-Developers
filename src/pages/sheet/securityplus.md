---
layout: ../../layouts/BlogLayout.astro
title: "Security Plus Cheatsheet"
---

#  1: Introduction to Security
CIA : Confidentiality, Integrity, Availability

	- Confidentiality : Prevents disclosure of information to outside party
	- Integrity : Guarantees data has not been tampered with
	- Availability : Resources can be accessed when needed

AAA : Authentication, Authorization, Accounting(non-repudiation)

	- Authentication : Confirms one’s identity e.g.) username/password, biometrics, signature etc
	- Authorization : Allows one to access certain materials e.g.) ACL(Access Control Lists), Linux permission bits etc
    - Accounting : Tracking of data/comp./netwrk resources usage for individualse.g.) Logging, auditing, data/network monitoring

Types of Threats

	- Malicious Software
	- Unauthorized Access
	- System Failure
	- Social Engineering

Physical, Technical, Administrative Security plans

	- Physical : Physical security systems such as alarms, ID cards, CCTV etc
	- Technical : Smart cards, ACLs, encryption etc
	- Administrative : Policies, procedures, DRP(Disaster recovery plan) etc

Protection Methods

	- User Awareness
	- Authentication
	- Anti-malware
	- Data Backups
	- Encryption
	- Data Removal
*Good security plan + Good protection method = Solid defense (Defense in depth)

Types of Hackers

	- White Hat
	- Black Hat
	- Grey Hat
	- Blue Hat (Bounty Hunters)
	- Elites (Zero day discoverers)

Types of Attackers

	- Script Kiddie
	- Hacktivist
	- Organized Crime
	- APT(Advanced Persistent Threat aka Nation state attacker)
 
## 2 : Computer Systems Security Part 1 (Malware)

Types of Malware

	- Viruses
		Malicious code executed by the user, lives on a file
		> Boot Sector : Placed in first hard drive sector
		> Macro : Placed into documents
		> Program : Infects executables
		> Encrypted : Avoids detection through encryption
		> Polymorphic : Decryption module changes with every infection
		> Metamorphic : Whole virus code changes with every infection
		> Stealth
		> Armored : Misdirects antivirus away from its actual location
		> Multipartite : Hybrid of boot sector and program
	- Worms
	Malicious code that replicates, standalone program, may spread automatically
	- Trojans
		Appear to be beneficial but contain malicious code
		> Keygens
		> RAT Trojans
	- Ransomware
		Encrypts files and data and demands payment to unlock
		Often propagates as a Trojan or a worm
	- Spyware
		Usually hidden inside third party applications
		Logs various user activities and sends it to attacker
		Also associated with Adware and Grayware
	- Rootkits
		Designed to gain administrative control over a machine
		Hard to detect b/c it targets low level(UEFI/BIOS, kernel etc)
		Activates before Antivirus/OS
	- Spam
		Abuse of electronic messaging system

Malware Delivery

	Treat Vector vs Attack Vector
	- Software, Messaging and Media
		> Emails, FTP, P2P/torrent file downloads
		> Removable Media
	- Typosquatting
	- Exploit kit
	- Botnets and Zombies
		> Also used for DDOS or financial gain
	- Active Interception (MITM)
	- Privilege Escalation
	- Backdoor
		> Authentication bypass mechanisms built into the program itself
	- Logic Bombs
		> Triggers malware on certain condition(date, OS type etc)

Malware Prevention / Troubleshooting
	
	Common Symptoms : Slow computer speed, crashes, incorrect home page, popups
	Common Prevention
		> Antivirus : Regular updates and scans
				  Detects : worms, viruses and Trojans
				  Does not detect : Botnet activity, rootkits, logic bombs
		> Firewalls and Regular OS updates
		> Separation of OS and data
		> Hardware + Software based firewall (e.g. router + Windows Firewall)
		> Encryption for confidentiality (Windows EFS)
	Common Steps to Malware Removal
		1. Identify Symptoms
		2. Quarantine infected system / drive to clean machine
		3. Disable System Restore
		4. Remediate affected system
			> Update AV / Scan and removal
		5. Schedule scans and run update
		6. Enable system restore and set new restore point
		7. Educate end user
	Worms and Trojans
		> Antivirus, Regular maintenance and vigilance
	Spyware
		> Antivirus, browser security settings, remove unnecessary application
		> End user education 
	Rootkits
		> Antivirus, Rootkit detectors (USB bootable OS)
		> Use UEFI over BIOS (GPT over MBR)
		> Wipe the entire drive & reinstall OS
	Spam
		> Spam filter, whitelisting/blacklisting, close open mail relays
 
## 3 : Computer Systems Security Part 2

Security Applications

	- Personal Firewalls (Host based firewalls)
		> Windows Firewall
		> ZoneAlarm
		> Packet Filter and IP Firewall (Mac OSX)
		> iptables (Linux)
	- IDS (Intrusion Detection System)
		Host Based : Loaded onto individual machine
				 Analyzes and monitors that one machine state
				 Can interpret encrypted traffic
		Network Based : Either loaded onto a machine or standalone device
				    Monitors every packet going through network interface
				    Monitors multiple devices, less expensive
				    Cannot monitor what happens in an OS
	- Monitoring Types – 
	Statistical Anomaly vs Signature
			> Statistical Anomaly Establishes baseline and compares current performance
			> Signature
				Network traffic analyzed to find predetermined patterns
		HIDS examples
			> Trend Micro OSSEC (freeware)
			> Verisys (Commercial, Windows)
			> Tripwire (Commercial)
		* Make sure to protect HIDS database with encryption and access control
	- Popup Blockers
		Ad filtering & Content filtering
	- DLP (Data Loss Prevention)
		Monitors data in use / in motion / at rest
		Prevents unauthorized use and leakage of data
		Types of DLP
			> Endpoint DLP : Runs on single machine, software based
			> Network DLP : Software/hardware, installed on network perimeter
			> Storage DLP : Installed in data centers/server rooms

Securing Computer Hardware and Peripherals
	
	Examples of peripherals: USB flash drives, SATA external HDD, optical disks
	Securing BIOS
		- Flashing (Updating) BIOS firmware
		- BIOS password
		- Configure BIOS Boot order
		- Secure boot (disables unsigned device drivers, UEFI)
		* UEFI and Root of Trust, secure/measured boot, attestation
	Securing Storage Devices
		- Removable Storage
			> Typically prohibits all removable storage besides specific ones
			> Removable Media Controls
				USB Lockdown (BIOS), limit USB use, malware scans, audits
		- NAS (Network Attached Storage)
			> Built for high availability (no downtime)
			> Commonly implemented as RAID array (levels depend on situation)
			> Use encryption, authentication, secure logging etc
		- Whole Disk Encryption
			> Requires either self encrypting or full disk encryption SW
			> Windows BitLocker requirements
				1) TPM or External USB key with encrypted keys
				2) Hard drive with 2 volumes(1 for boot, 1 to be encrypted)
			> Double Encryption – BitLocker + EFS
		- HSM (Hardware Security Modules)
			Vs TPM
				TPM handles key storage with limited cryptographic function
				HSM handles mainly quick crypto functions with key storage
			Found in USB attachment or network attached device
	
	

Securing Wireless Peripherals
		
	- Force devices to use AES or WPA2 encryption for data transmission

Securing Mobile Devices
	
	General Security
		- Keep phone number secure and do not respond to unsolicited calls
		- Update mobile device OS
		- Complex password and limit downloads to device
	Malware
		- Install & update mobile device AV
		- Take use of built in security features
		- Avoid following links, don’t store information on device
		- Don’t post info on social media
	Botnet Activity
		- Follow anti-malware procedures
		- Avoid rooting / jailbreaking phones
	SIM Cloning
		- A cloned SIM redirects all calls and texts to its own device
		- Able to hijack messages intended for original SIM card owner
	Wireless Attacks
		- Bluejacking
		- Bluesnarfing

	Theft
		- Full device encryption(FDE)
		- Set up GPS tracking
		- Remote lock & Remote wipe technology
	Mobile Application
		- Mobile key management : use Third party software (Verisign)
		- Application whitelisting / blacklisting
		- Strong SMS application and endpoint security
		- Mobile payment : avoid public networks, user education
		- Geotagging : Disable GPS depending on situation
		- BYOD concerns
			> Storage Segmentation : divide corporate vs private data storage
			> Mobile Device Management systems for corporations
 
