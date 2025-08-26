import {
  Alert,
  BodyShort,
  Checkbox,
  CheckboxGroup,
  Heading,
  Radio,
  RadioGroup,
  Stepper,
  Switch,
  Table,
  TextField
} from '@navikt/ds-react'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../../AppContext'
import img from './blueberry.png'

export const TestSide = () => {
  const [hideScreen, setHideScreen] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [showAlert, setShowAlert] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const step1Ref = useRef<HTMLHeadingElement>(null)
  const step2Ref = useRef<HTMLHeadingElement>(null)
  const step3Ref = useRef<HTMLHeadingElement>(null)
  const step4Ref = useRef<HTMLParagraphElement>(null)
  const t = useAppContext().text.TestSide
  document.title = t.title

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus()
    }
  }, [])

  const changeStep = (step: number) => {
    setActiveStep(step)
    setTimeout(() => {
      if (step === 1 && step1Ref.current) {
        step1Ref.current.focus()
      } else if (step === 2 && step2Ref.current) {
        step2Ref.current.focus()
      } else if (step === 3 && step3Ref.current) {
        step3Ref.current.focus()
      } else if (step === 4 && step4Ref.current) {
        step4Ref.current.focus()
      }
    }, 150)
  }

  return (
    <div className="flex flex-col gap-4 h-screen overflow-auto p-4 pl-6 golden-panel">
      <Heading
        level="1"
        size="medium"
        className="outline-none"
        tabIndex={-1}
        ref={headingRef}
      >
        {t.overskrift}
      </Heading>

      <BodyShort>{t.info}</BodyShort>

      <Switch
        checked={hideScreen}
        size="small"
        onChange={() => setHideScreen(!hideScreen)}
      >
        {t.switch}
      </Switch>

      <div className="bg-[#4b3e2a] h-[1px] border border-[#4b3e2a]" />

      <div className="grid grid-cols-1 md:grid-cols-[auto_1px_1fr] gap-4">
        <nav aria-label={t.navigasjon}>
          <Stepper
            aria-label={t.overskrift}
            activeStep={activeStep}
            onStepChange={changeStep}
          >
            <Stepper.Step
              as="button"
              onClick={() => changeStep(1)}
              completed={activeStep > 1}
            >
              {t.step1.navn}
            </Stepper.Step>
            <Stepper.Step
              as="button"
              onClick={() => changeStep(2)}
              completed={activeStep > 2}
            >
              {t.step2.navn}
            </Stepper.Step>
            <Stepper.Step
              as="button"
              onClick={() => changeStep(3)}
              completed={activeStep > 3}
            >
              {t.step3.navn}
            </Stepper.Step>
            <Stepper.Step
              as="button"
              onClick={() => changeStep(4)}
              completed={activeStep === 4}
            >
              {t.step4.navn}
            </Stepper.Step>
          </Stepper>
        </nav>

        <div className="bg-[#4b3e2a]" />

        <div className={`ml-4 ${hideScreen ? 'blur-lg' : ''}`}>
          {activeStep === 1 && (
            <div className="flex flex-col gap-4">
              <Heading
                level="2"
                size="medium"
                className="outline-none"
                tabIndex={-1}
                ref={step1Ref}
              >
                {t.step1.heading}
              </Heading>

              <img src={img} alt={t.step1.test1.bildeAlt} className="w-8"></img>

              <RadioGroup
                legend={t.step1.test1.label}
                size="small"
                className="test_radio"
              >
                <Radio value={t.step1.test1.alt1}>{t.step1.test1.alt1}</Radio>
                <Radio value={t.step1.test1.alt2}>{t.step1.test1.alt2}</Radio>
                <Radio value={t.step1.test1.alt3}>{t.step1.test1.alt3}</Radio>
              </RadioGroup>

              <CheckboxGroup legend={t.step1.test2.label} size="small">
                <Checkbox value={t.step1.test2.alt1}>{t.step1.test2.alt1}</Checkbox>
                <Checkbox value={t.step1.test2.alt2}>{t.step1.test2.alt2}</Checkbox>
                <Checkbox value={t.step1.test2.alt3}>{t.step1.test2.alt3}</Checkbox>
              </CheckboxGroup>

              <button
                aria-live="polite"
                className="mt-4 gold-button"
                onClick={() => changeStep(2)}
              >
                {t.knapp}
              </button>
            </div>
          )}

          {activeStep === 2 && (
            <div className="flex flex-col gap-4">
              <Heading
                level="2"
                size="medium"
                className="outline-none"
                tabIndex={-1}
                ref={step2Ref}
              >
                {t.step2.heading}
              </Heading>

              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell scope="col">
                      {t.step2.test1.tabellFrukt}
                    </Table.HeaderCell>
                    <Table.HeaderCell scope="col">
                      {t.step2.test1.tabellPris}
                    </Table.HeaderCell>
                    <Table.HeaderCell scope="col">
                      {t.step2.test1.beholdning}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell scope="row">
                      {t.step2.test1.banan}
                    </Table.HeaderCell>
                    <Table.DataCell>16 kr</Table.DataCell>
                    <Table.DataCell>8</Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">
                      {t.step2.test1.eple}
                    </Table.HeaderCell>
                    <Table.DataCell>22 kr</Table.DataCell>
                    <Table.DataCell>20</Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">
                      {t.step2.test1.kiwi}
                    </Table.HeaderCell>
                    <Table.DataCell>24 kr</Table.DataCell>
                    <Table.DataCell>10</Table.DataCell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <TextField
                label={t.step2.test1.label}
                size="small"
                className="w-[15rem]"
              />
              <button className="mt-4 gold-button" onClick={() => changeStep(3)}>
                {t.knapp}
              </button>
            </div>
          )}

          {activeStep === 3 && (
            <div className="flex flex-col gap-4">
              <Heading
                level="2"
                size="medium"
                className="outline-none"
                tabIndex={-1}
                ref={step3Ref}
              >
                {t.step3.heading}
              </Heading>

              <Heading className="sr-only" size="small" level="3">
                {t.step3.test1.overskrift}
              </Heading>
              <TextField
                label={t.step3.test1.label}
                size="small"
                className="w-[20rem]"
              />

              <button
                className="mt-4 gold-button"
                onClick={() => setShowAlert(!showAlert)}
              >
                {t.knapp}
              </button>

              {showAlert && (
                <>
                  <Alert
                    variant="warning"
                    role="alert"
                    size="small"
                    aria-atomic="true"
                  >
                    {t.step3.test2.alert}
                  </Alert>

                  <button className="mt-4 gold-button" onClick={() => changeStep(4)}>
                    {t.neste}
                  </button>
                </>
              )}
            </div>
          )}

          {activeStep === 4 && (
            <div className="flex flex-col gap-4">
              <Heading level="2" size="medium">
                {t.step4.navn}
              </Heading>
              <BodyShort className="outline-none" tabIndex={-1} ref={step4Ref}>
                {t.step4.tekst}
              </BodyShort>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
