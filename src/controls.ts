export class Control {
  public name!: string;
  public description!: string;
  public notes!: string;
}
export const controls: Control[] = [
  {
    name: 'AC-1',
    description: 'ACCESS CONTROL POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'AC-2',
    description: 'ACCOUNT MANAGEMENT',
    notes: '',
  }, {
    name: 'AC-3',
    description: 'ACCESS ENFORCEMENT',
    notes: '',
  }, {
    name: 'AC-4',
    description: 'INFORMATION FLOW ENFORCEMENT',
    notes: '',
  }, {
    name: 'AC-5',
    description: 'SEPARATION OF DUTIES',
    notes: '',
  }, {
    name: 'AC-6',
    description: 'LEAST PRIVILEGE',
    notes: '',
  }, {
    name: 'AC-7',
    description: 'UNSUCCESSFUL LOGON ATTEMPTS',
    notes: '',
  }, {
    name: 'AC-8',
    description: 'SYSTEM USE NOTIFICATION',
    notes: '',
  }, {
    name: 'AC-9',
    description: 'PREVIOUS LOGON (ACCESS) NOTIFICATION',
    notes: '',
  }, {
    name: 'AC-10',
    description: 'CONCURRENT SESSION CONTROL',
    notes: '',
  }, {
    name: 'AC-11',
    description: 'SESSION LOCK',
    notes: '',
  }, {
    name: 'AC-12',
    description: 'SESSION TERMINATION',
    notes: '',
  }, {
    name: 'AC-13',
    description: 'SUPERVISION AND REVIEW',
    notes: '',
  }, {
    name: 'AC-14',
    description: 'PERMITTED ACTIONS WITHOUT IDENTIFICATION OR AUTHENTICATION',
    notes: '',
  }, {
    name: 'AC-15',
    description: 'AUTOMATED MARKING',
    notes: '',
  }, {
    name: 'AC-16',
    description: 'SECURITY ATTRIBUTES',
    notes: '',
  }, {
    name: 'AC-17',
    description: 'REMOTE ACCESS',
    notes: '',
  }, {
    name: 'AC-18',
    description: 'WIRELESS ACCESS',
    notes: '',
  }, {
    name: 'AC-19',
    description: 'ACCESS CONTROL FOR MOBILE DEVICES',
    notes: '',
  }, {
    name: 'AC-20',
    description: 'USE OF EXTERNAL INFORMATION SYSTEMS',
    notes: '',
  }, {
    name: 'AC-21',
    description: 'INFORMATION SHARING',
    notes: '',
  }, {
    name: 'AC-22',
    description: 'PUBLICLY ACCESSIBLE CONTENT',
    notes: '',
  }, {
    name: 'AC-23',
    description: 'DATA MINING PROTECTION',
    notes: '',
  }, {
    name: 'AC-24',
    description: 'ACCESS CONTROL DECISIONS',
    notes: '',
  }, {
    name: 'AC-25',
    description: 'REFERENCE MONITOR',
    notes: '',
  }, {
    name: 'AU-1',
    description: 'AUDIT AND ACCOUNTABILITY POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'AU-2',
    description: 'AUDIT EVENTS',
    notes: '',
  }, {
    name: 'AU-3',
    description: 'CONTENT OF AUDIT RECORDS',
    notes: '',
  }, {
    name: 'AU-4',
    description: 'AUDIT STORAGE CAPACITY',
    notes: '',
  }, {
    name: 'AU-5',
    description: 'RESPONSE TO AUDIT PROCESSING FAILURES',
    notes: '',
  }, {
    name: 'AU-6',
    description: 'AUDIT REVIEW, ANALYSIS, AND REPORTING',
    notes: '',
  }, {
    name: 'AU-7',
    description: 'AUDIT REDUCTION AND REPORT GENERATION',
    notes: '',
  }, {
    name: 'AU-8',
    description: 'TIME STAMPS',
    notes: '',
  }, {
    name: 'AU-9',
    description: 'PROTECTION OF AUDIT INFORMATION',
    notes: '',
  }, {
    name: 'AU-10',
    description: 'NON-REPUDIATION',
    notes: '',
  }, {
    name: 'AU-11',
    description: 'AUDIT RECORD RETENTION',
    notes: '',
  }, {
    name: 'AU-12',
    description: 'AUDIT GENERATION',
    notes: '',
  }, {
    name: 'AU-13',
    description: 'MONITORING FOR INFORMATION DISCLOSURE',
    notes: '',
  }, {
    name: 'AU-14',
    description: 'SESSION AUDIT',
    notes: '',
  }, {
    name: 'AU-15',
    description: 'ALTERNATE AUDIT CAPABILITY',
    notes: '',
  }, {
    name: 'AU-16',
    description: 'CROSS-ORGANIZATIONAL AUDITING',
    notes: '',
  }, {
    name: 'AT-1',
    description: 'SECURITY AWARENESS AND TRAINING POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'AT-2',
    description: 'SECURITY AWARENESS TRAINING',
    notes: '',
  }, {
    name: 'AT-3',
    description: 'ROLE-BASED SECURITY TRAINING',
    notes: '',
  }, {
    name: 'AT-4',
    description: 'SECURITY TRAINING RECORDS',
    notes: '',
  }, {
    name: 'AT-5',
    description: 'CONTACTS WITH SECURITY GROUPS AND ASSOCIATIONS',
    notes: '',
  }, {
    name: 'CM-1',
    description: 'CONFIGURATION MANAGEMENT POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'CM-2',
    description: 'BASELINE CONFIGURATION',
    notes: '',
  }, {
    name: 'CM-3',
    description: 'CONFIGURATION CHANGE CONTROL',
    notes: '',
  }, {
    name: 'CM-4',
    description: 'SECURITY IMPACT ANALYSIS',
    notes: '',
  }, {
    name: 'CM-5',
    description: 'ACCESS RESTRICTIONS FOR CHANGE',
    notes: '',
  }, {
    name: 'CM-6',
    description: 'CONFIGURATION SETTINGS',
    notes: '',
  }, {
    name: 'CM-7',
    description: 'LEAST FUNCTIONALITY',
    notes: '',
  }, {
    name: 'CM-8',
    description: 'INFORMATION SYSTEM COMPONENT INVENTORY',
    notes: '',
  }, {
    name: 'CM-9',
    description: 'CONFIGURATION MANAGEMENT PLAN',
    notes: '',
  }, {
    name: 'CM-10',
    description: 'SOFTWARE USAGE RESTRICTIONS',
    notes: '',
  }, {
    name: 'CM-11',
    description: 'USER-INSTALLED SOFTWARE',
    notes: '',
  }, {
    name: 'CP-1',
    description: 'CONTINGENCY PLANNING POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'CP-2',
    description: 'CONTINGENCY PLAN',
    notes: '',
  }, {
    name: 'CP-3',
    description: 'CONTINGENCY TRAINING',
    notes: '',
  }, {
    name: 'CP-4',
    description: 'CONTINGENCY PLAN TESTING',
    notes: '',
  }, {
    name: 'CP-5',
    description: 'CONTINGENCY PLAN UPDATE',
    notes: '',
  }, {
    name: 'CP-6',
    description: 'ALTERNATE STORAGE SITE',
    notes: '',
  }, {
    name: 'CP-7',
    description: 'ALTERNATE PROCESSING SITE',
    notes: '',
  }, {
    name: 'CP-8',
    description: 'TELECOMMUNICATIONS SERVICES',
    notes: '',
  }, {
    name: 'CP-9',
    description: 'INFORMATION SYSTEM BACKUP',
    notes: '',
  }, {
    name: 'CP-10',
    description: 'INFORMATION SYSTEM RECOVERY AND RECONSTITUTION',
    notes: '',
  }, {
    name: 'CP-11',
    description: 'ALTERNATE COMMUNICATIONS PROTOCOLS',
    notes: '',
  }, {
    name: 'CP-12',
    description: 'SAFE MODE',
    notes: '',
  }, {
    name: 'CP-13',
    description: 'ALTERNATIVE SECURITY MECHANISMS',
    notes: '',
  }, {
    name: 'IA-1',
    description: 'IDENTIFICATION AND AUTHENTICATION POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'IA-2',
    description: 'IDENTIFICATION AND AUTHENTICATION (ORGANIZATIONAL USERS)',
    notes: '',
  }, {
    name: 'IA-3',
    description: 'DEVICE IDENTIFICATION AND AUTHENTICATION',
    notes: '',
  }, {
    name: 'IA-4',
    description: 'IDENTIFIER MANAGEMENT',
    notes: '',
  }, {
    name: 'IA-5',
    description: 'AUTHENTICATOR MANAGEMENT',
    notes: '',
  }, {
    name: 'IA-6',
    description: 'AUTHENTICATOR FEEDBACK',
    notes: '',
  }, {
    name: 'IA-7',
    description: 'CRYPTOGRAPHIC MODULE AUTHENTICATION',
    notes: '',
  }, {
    name: 'IA-8',
    description: 'IDENTIFICATION AND AUTHENTICATION (NON-ORGANIZATIONAL USERS)',
    notes: '',
  }, {
    name: 'IA-9',
    description: 'SERVICE IDENTIFICATION AND AUTHENTICATION',
    notes: '',
  }, {
    name: 'IA-10',
    description: 'ADAPTIVE IDENTIFICATION AND AUTHENTICATION',
    notes: '',
  }, {
    name: 'IA-11',
    description: 'RE-AUTHENTICATION',
    notes: '',
  }, {
    name: 'IR-1',
    description: 'INCIDENT RESPONSE POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'IR-2',
    description: 'INCIDENT RESPONSE TRAINING',
    notes: '',
  }, {
    name: 'IR-3',
    description: 'INCIDENT RESPONSE TESTING',
    notes: '',
  }, {
    name: 'IR-4',
    description: 'INCIDENT HANDLING',
    notes: '',
  }, {
    name: 'IR-5',
    description: 'INCIDENT MONITORING',
    notes: '',
  }, {
    name: 'IR-6',
    description: 'INCIDENT REPORTING',
    notes: '',
  }, {
    name: 'IR-7',
    description: 'INCIDENT RESPONSE ASSISTANCE',
    notes: '',
  }, {
    name: 'IR-8',
    description: 'INCIDENT RESPONSE PLAN',
    notes: '',
  }, {
    name: 'IR-9',
    description: 'INFORMATION SPILLAGE RESPONSE',
    notes: '',
  }, {
    name: 'IR-10',
    description: 'INTEGRATED INFORMATION SECURITY ANALYSIS TEAM',
    notes: '',
  }, {
    name: 'MA-1',
    description: 'SYSTEM MAINTENANCE POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'MA-2',
    description: 'CONTROLLED MAINTENANCE',
    notes: '',
  }, {
    name: 'MA-3',
    description: 'MAINTENANCE TOOLS',
    notes: '',
  }, {
    name: 'MA-4',
    description: 'NONLOCAL MAINTENANCE',
    notes: '',
  }, {
    name: 'MA-5',
    description: 'MAINTENANCE PERSONNEL',
    notes: '',
  }, {
    name: 'MA-6',
    description: 'TIMELY MAINTENANCE',
    notes: '',
  }, {
    name: 'MP-1',
    description: 'MEDIA PROTECTION POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'MP-2',
    description: 'MEDIA ACCESS',
    notes: '',
  }, {
    name: 'MP-3',
    description: 'MEDIA MARKING',
    notes: '',
  }, {
    name: 'MP-4',
    description: 'MEDIA STORAGE',
    notes: '',
  }, {
    name: 'MP-5',
    description: 'MEDIA TRANSPORT',
    notes: '',
  }, {
    name: 'MP-6',
    description: 'MEDIA SANITIZATION',
    notes: '',
  }, {
    name: 'MP-7',
    description: 'MEDIA USE',
    notes: '',
  }, {
    name: 'MP-8',
    description: 'MEDIA DOWNGRADING',
    notes: '',
  }, {
    name: 'PS-1',
    description: 'PERSONNEL SECURITY POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'PS-2',
    description: 'POSITION RISK DESIGNATION',
    notes: '',
  }, {
    name: 'PS-3',
    description: 'PERSONNEL SCREENING',
    notes: '',
  }, {
    name: 'PS-4',
    description: 'PERSONNEL TERMINATION',
    notes: '',
  }, {
    name: 'PS-5',
    description: 'PERSONNEL TRANSFER',
    notes: '',
  }, {
    name: 'PS-6',
    description: 'ACCESS AGREEMENTS',
    notes: '',
  }, {
    name: 'PS-7',
    description: 'THIRD-PARTY PERSONNEL SECURITY',
    notes: '',
  }, {
    name: 'PS-8',
    description: 'PERSONNEL SANCTIONS',
    notes: '',
  }, {
    name: 'PE-1',
    description: 'PHYSICAL AND ENVIRONMENTAL PROTECTION POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'PE-2',
    description: 'PHYSICAL ACCESS AUTHORIZATIONS',
    notes: '',
  }, {
    name: 'PE-3',
    description: 'PHYSICAL ACCESS CONTROL',
    notes: '',
  }, {
    name: 'PE-4',
    description: 'ACCESS CONTROL FOR TRANSMISSION MEDIUM',
    notes: '',
  }, {
    name: 'PE-5',
    description: 'ACCESS CONTROL FOR OUTPUT DEVICES',
    notes: '',
  }, {
    name: 'PE-6',
    description: 'MONITORING PHYSICAL ACCESS',
    notes: '',
  }, {
    name: 'PE-7',
    description: 'VISITOR CONTROL',
    notes: '',
  }, {
    name: 'PE-8',
    description: 'VISITOR ACCESS RECORDS',
    notes: '',
  }, {
    name: 'PE-9',
    description: 'POWER EQUIPMENT AND CABLING',
    notes: '',
  }, {
    name: 'PE-10',
    description: 'EMERGENCY SHUTOFF',
    notes: '',
  }, {
    name: 'PE-11',
    description: 'EMERGENCY POWER',
    notes: '',
  }, {
    name: 'PE-12',
    description: 'EMERGENCY LIGHTING',
    notes: '',
  }, {
    name: 'PE-13',
    description: 'FIRE PROTECTION',
    notes: '',
  }, {
    name: 'PE-14',
    description: 'TEMPERATURE AND HUMIDITY CONTROLS',
    notes: '',
  }, {
    name: 'PE-15',
    description: 'WATER DAMAGE PROTECTION',
    notes: '',
  }, {
    name: 'PE-16',
    description: 'DELIVERY AND REMOVAL',
    notes: '',
  }, {
    name: 'PE-17',
    description: 'ALTERNATE WORK SITE',
    notes: '',
  }, {
    name: 'PE-18',
    description: 'LOCATION OF INFORMATION SYSTEM COMPONENTS',
    notes: '',
  }, {
    name: 'PE-19',
    description: 'INFORMATION LEAKAGE',
    notes: '',
  }, {
    name: 'PE-20',
    description: 'ASSET MONITORING AND TRACKING',
    notes: '',
  }, {
    name: 'PL-1',
    description: 'SECURITY PLANNING POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'PL-2',
    description: 'SYSTEM SECURITY PLAN',
    notes: '',
  }, {
    name: 'PL-3',
    description: 'SYSTEM SECURITY PLAN UPDATE',
    notes: '',
  }, {
    name: 'PL-4',
    description: 'RULES OF BEHAVIOR',
    notes: '',
  }, {
    name: 'PL-5',
    description: 'PRIVACY IMPACT ASSESSMENT',
    notes: '',
  }, {
    name: 'PL-6',
    description: 'SECURITY-RELATED ACTIVITY PLANNING',
    notes: '',
  }, {
    name: 'PL-7',
    description: 'SECURITY CONCEPT OF OPERATIONS',
    notes: '',
  }, {
    name: 'PL-8',
    description: 'INFORMATION SECURITY ARCHITECTURE',
    notes: '',
  }, {
    name: 'PL-9',
    description: 'CENTRAL MANAGEMENT',
    notes: '',
  }, {
    name: 'PM-1',
    description: 'INFORMATION SECURITY PROGRAM PLAN',
    notes: '',
  }, {
    name: 'PM-2',
    description: 'SENIOR INFORMATION SECURITY OFFICER',
    notes: '',
  }, {
    name: 'PM-3',
    description: 'INFORMATION SECURITY RESOURCES',
    notes: '',
  }, {
    name: 'PM-4',
    description: 'PLAN OF ACTION AND MILESTONES PROCESS',
    notes: '',
  }, {
    name: 'PM-5',
    description: 'INFORMATION SYSTEM INVENTORY',
    notes: '',
  }, {
    name: 'PM-6',
    description: 'INFORMATION SECURITY MEASURES OF PERFORMANCE',
    notes: '',
  }, {
    name: 'PM-7',
    description: 'ENTERPRISE ARCHITECTURE',
    notes: '',
  }, {
    name: 'PM-8',
    description: 'CRITICAL INFRASTRUCTURE PLAN',
    notes: '',
  }, {
    name: 'PM-9',
    description: 'RISK MANAGEMENT STRATEGY',
    notes: '',
  }, {
    name: 'PM-10',
    description: 'SECURITY AUTHORIZATION PROCESS',
    notes: '',
  }, {
    name: 'PM-11',
    description: 'MISSION/BUSINESS PROCESS DEFINITION',
    notes: '',
  }, {
    name: 'PM-12',
    description: 'INSIDER THREAT PROGRAM',
    notes: '',
  }, {
    name: 'PM-13',
    description: 'INFORMATION SECURITY WORKFORCE',
    notes: '',
  }, {
    name: 'PM-14',
    description: 'TESTING, TRAINING, AND MONITORING',
    notes: '',
  }, {
    name: 'PM-15',
    description: 'CONTACTS WITH SECURITY GROUPS AND ASSOCIATIONS',
    notes: '',
  }, {
    name: 'PM-16',
    description: 'THREAT AWARENESS PROGRAM',
    notes: '',
  }, {
    name: 'RA-1',
    description: 'RISK ASSESSMENT POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'RA-2',
    description: 'SECURITY CATEGORIZATION',
    notes: '',
  }, {
    name: 'RA-3',
    description: 'RISK ASSESSMENT',
    notes: '',
  }, {
    name: 'RA-4',
    description: 'RISK ASSESSMENT UPDATE',
    notes: '',
  }, {
    name: 'RA-5',
    description: 'VULNERABILITY SCANNING',
    notes: '',
  }, {
    name: 'RA-6',
    description: 'TECHNICAL SURVEILLANCE COUNTERMEASURES SURVEY',
    notes: '',
  }, {
    name: 'CA-1',
    description: 'SECURITY ASSESSMENT AND AUTHORIZATION POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'CA-2',
    description: 'SECURITY ASSESSMENTS',
    notes: '',
  }, {
    name: 'CA-3',
    description: 'SYSTEM INTERCONNECTIONS',
    notes: '',
  }, {
    name: 'CA-4',
    description: 'SECURITY CERTIFICATION',
    notes: '',
  }, {
    name: 'CA-5',
    description: 'PLAN OF ACTION AND MILESTONES',
    notes: '',
  }, {
    name: 'CA-6',
    description: 'SECURITY AUTHORIZATION',
    notes: '',
  }, {
    name: 'CA-7',
    description: 'CONTINUOUS MONITORING',
    notes: '',
  }, {
    name: 'CA-8',
    description: 'PENETRATION TESTING',
    notes: '',
  }, {
    name: 'CA-9',
    description: 'INTERNAL SYSTEM CONNECTIONS',
    notes: '',
  }, {
    name: 'SC-1',
    description: 'SYSTEM AND COMMUNICATIONS PROTECTION POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'SC-2',
    description: 'APPLICATION PARTITIONING',
    notes: '',
  }, {
    name: 'SC-3',
    description: 'SECURITY FUNCTION ISOLATION',
    notes: '',
  }, {
    name: 'SC-4',
    description: 'INFORMATION IN SHARED RESOURCES',
    notes: '',
  }, {
    name: 'SC-5',
    description: 'DENIAL OF SERVICE PROTECTION',
    notes: '',
  }, {
    name: 'SC-6',
    description: 'RESOURCE AVAILABILITY',
    notes: '',
  }, {
    name: 'SC-7',
    description: 'BOUNDARY PROTECTION',
    notes: '',
  }, {
    name: 'SC-8',
    description: 'TRANSMISSION CONFIDENTIALITY AND INTEGRITY',
    notes: '',
  }, {
    name: 'SC-9',
    description: 'TRANSMISSION CONFIDENTIALITY',
    notes: '',
  }, {
    name: 'SC-10',
    description: 'NETWORK DISCONNECT',
    notes: '',
  }, {
    name: 'SC-11',
    description: 'TRUSTED PATH',
    notes: '',
  }, {
    name: 'SC-12',
    description: 'CRYPTOGRAPHIC KEY ESTABLISHMENT AND MANAGEMENT',
    notes: '',
  }, {
    name: 'SC-13',
    description: 'CRYPTOGRAPHIC PROTECTION',
    notes: '',
  }, {
    name: 'SC-14',
    description: 'PUBLIC ACCESS PROTECTIONS',
    notes: '',
  }, {
    name: 'SC-15',
    description: 'COLLABORATIVE COMPUTING DEVICES',
    notes: '',
  }, {
    name: 'SC-16',
    description: 'TRANSMISSION OF SECURITY ATTRIBUTES',
    notes: '',
  }, {
    name: 'SC-17',
    description: 'PUBLIC KEY INFRASTRUCTURE CERTIFICATES',
    notes: '',
  }, {
    name: 'SC-18',
    description: 'MOBILE CODE',
    notes: '',
  }, {
    name: 'SC-19',
    description: 'VOICE OVER INTERNET PROTOCOL',
    notes: '',
  }, {
    name: 'SC-20',
    description: 'SECURE NAME / ADDRESS RESOLUTION SERVICE (AUTHORITATIVE SOURCE)',
    notes: '',
  }, {
    name: 'SC-21',
    description: 'SECURE NAME / ADDRESS RESOLUTION SERVICE (RECURSIVE OR CACHING RESOLVER)',
    notes: '',
  }, {
    name: 'SC-22',
    description: 'ARCHITECTURE AND PROVISIONING FOR NAME / ADDRESS RESOLUTION SERVICE',
    notes: '',
  }, {
    name: 'SC-23',
    description: 'SESSION AUTHENTICITY',
    notes: '',
  }, {
    name: 'SC-24',
    description: 'FAIL IN KNOWN STATE',
    notes: '',
  }, {
    name: 'SC-25',
    description: 'THIN NODES',
    notes: '',
  }, {
    name: 'SC-26',
    description: 'HONEYPOTS',
    notes: '',
  }, {
    name: 'SC-27',
    description: 'PLATFORM-INDEPENDENT APPLICATIONS',
    notes: '',
  }, {
    name: 'SC-28',
    description: 'PROTECTION OF INFORMATION AT REST',
    notes: '',
  }, {
    name: 'SC-29',
    description: 'HETEROGENEITY',
    notes: '',
  }, {
    name: 'SC-30',
    description: 'CONCEALMENT AND MISDIRECTION',
    notes: '',
  }, {
    name: 'SC-31',
    description: 'COVERT CHANNEL ANALYSIS',
    notes: '',
  }, {
    name: 'SC-32',
    description: 'INFORMATION SYSTEM PARTITIONING',
    notes: '',
  }, {
    name: 'SC-33',
    description: 'TRANSMISSION PREPARATION INTEGRITY',
    notes: '',
  }, {
    name: 'SC-34',
    description: 'NON-MODIFIABLE EXECUTABLE PROGRAMS',
    notes: '',
  }, {
    name: 'SC-35',
    description: 'HONEYCLIENTS',
    notes: '',
  }, {
    name: 'SC-36',
    description: 'DISTRIBUTED PROCESSING AND STORAGE',
    notes: '',
  }, {
    name: 'SC-37',
    description: 'OUT-OF-BAND CHANNELS',
    notes: '',
  }, {
    name: 'SC-38',
    description: 'OPERATIONS SECURITY',
    notes: '',
  }, {
    name: 'SC-39',
    description: 'PROCESS ISOLATION',
    notes: '',
  }, {
    name: 'SC-40',
    description: 'WIRELESS LINK PROTECTION',
    notes: '',
  }, {
    name: 'SC-41',
    description: 'PORT AND I/O DEVICE ACCESS',
    notes: '',
  }, {
    name: 'SC-42',
    description: 'SENSOR CAPABILITY AND DATA',
    notes: '',
  }, {
    name: 'SC-43',
    description: 'USAGE RESTRICTIONS',
    notes: '',
  }, {
    name: 'SC-44',
    description: 'DETONATION CHAMBERS',
    notes: '',
  }, {
    name: 'SI-1',
    description: 'SYSTEM AND INFORMATION INTEGRITY POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'SI-2',
    description: 'FLAW REMEDIATION',
    notes: '',
  }, {
    name: 'SI-3',
    description: 'MALICIOUS CODE PROTECTION',
    notes: '',
  }, {
    name: 'SI-4',
    description: 'INFORMATION SYSTEM MONITORING',
    notes: '',
  }, {
    name: 'SI-5',
    description: 'SECURITY ALERTS, ADVISORIES, AND DIRECTIVES',
    notes: '',
  }, {
    name: 'SI-6',
    description: 'SECURITY FUNCTION VERIFICATION',
    notes: '',
  }, {
    name: 'SI-7',
    description: 'SOFTWARE, FIRMWARE, AND INFORMATION INTEGRITY',
    notes: '',
  }, {
    name: 'SI-8',
    description: 'SPAM PROTECTION',
    notes: '',
  }, {
    name: 'SI-9',
    description: 'INFORMATION INPUT RESTRICTIONS',
    notes: '',
  }, {
    name: 'SI-11',
    description: 'ERROR HANDLING',
    notes: '',
  }, {
    name: 'SI-12',
    description: 'INFORMATION HANDLING AND RETENTION',
    notes: '',
  }, {
    name: 'SI-13',
    description: 'PREDICTABLE FAILURE PREVENTION',
    notes: '',
  }, {
    name: 'SI-14',
    description: 'NON-PERSISTENCE',
    notes: '',
  }, {
    name: 'SI-15',
    description: 'INFORMATION OUTPUT FILTERING',
    notes: '',
  }, {
    name: 'SI-16',
    description: 'MEMORY PROTECTION',
    notes: '',
  }, {
    name: 'SI-17',
    description: 'FAIL-SAFE PROCEDURES',
    notes: '',
  }, {
    name: 'SA-1',
    description: 'SYSTEM AND SERVICES ACQUISITION POLICY AND PROCEDURES',
    notes: '',
  }, {
    name: 'SA-2',
    description: 'ALLOCATION OF RESOURCES',
    notes: '',
  }, {
    name: 'SA-3',
    description: 'SYSTEM DEVELOPMENT LIFE CYCLE',
    notes: '',
  }, {
    name: 'SA-4',
    description: 'ACQUISITION PROCESS',
    notes: '',
  }, {
    name: 'SA-5',
    description: 'INFORMATION SYSTEM DOCUMENTATION',
    notes: '',
  }, {
    name: 'SA-6',
    description: 'SOFTWARE USAGE RESTRICTIONS',
    notes: '',
  }, {
    name: 'SA-7',
    description: 'USER-INSTALLED SOFTWARE',
    notes: '',
  }, {
    name: 'SA-8',
    description: 'SECURITY ENGINEERING PRINCIPLES',
    notes: '',
  }, {
    name: 'SA-9',
    description: 'EXTERNAL INFORMATION SYSTEM SERVICES',
    notes: '',
  }, {
    name: 'SA-10',
    description: 'DEVELOPER CONFIGURATION MANAGEMENT',
    notes: '',
  }, {
    name: 'SA-11',
    description: 'DEVELOPER SECURITY TESTING AND EVALUATION',
    notes: '',
  }, {
    name: 'SA-12',
    description: 'SUPPLY CHAIN PROTECTION',
    notes: '',
  }, {
    name: 'SA-13',
    description: 'TRUSTWORTHINESS',
    notes: '',
  }, {
    name: 'SA-14',
    description: 'CRITICALITY ANALYSIS',
    notes: '',
  }, {
    name: 'SA-15',
    description: 'DEVELOPMENT PROCESS, STANDARDS, AND TOOLS',
    notes: '',
  }, {
    name: 'SA-16',
    description: 'DEVELOPER-PROVIDED TRAINING',
    notes: '',
  }, {
    name: 'SA-17',
    description: 'DEVELOPER SECURITY ARCHITECTURE AND DESIGN',
    notes: '',
  }, {
    name: 'SA-18',
    description: 'TAMPER RESISTANCE AND DETECTION',
    notes: '',
  }, {
    name: 'SA-19',
    description: 'COMPONENT AUTHENTICITY',
    notes: '',
  }, {
    name: 'SA-20',
    description: 'CUSTOMIZED DEVELOPMENT OF CRITICAL COMPONENTS',
    notes: '',
  }, {
    name: 'SA-21',
    description: 'DEVELOPER SCREENING',
    notes: '',
  }, {
    name: 'SA-22',
    description: 'UNSUPPORTED SYSTEM COMPONENTS',
    notes: '',
  },
];
