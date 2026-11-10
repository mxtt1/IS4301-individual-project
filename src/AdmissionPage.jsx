const admissionSteps = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
]

function AdmissionPage() {
  return (
    <main className="page">
      <h1>Admission Process</h1>

      <ul className="admission-list">
        {admissionSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </main>
  )
}

export default AdmissionPage
