import { FigureIcon, RobotSmileIcon } from "@navikt/aksel-icons"
import { Heading, List, Tabs } from '@navikt/ds-react'
import { useAppContext } from "../AppContext"
import { SprakVelger } from '../SprakVelger'

export const SkjermleserKommandoer = () => {
  const t = useAppContext().text.SkjermleserKommandoer

	return (
		<div className="h-screen overflow-auto bg-[#CCE2F0] border-r-2 border-[#00243A] p-3 pb-1 text-black">
			<SprakVelger />
			<Heading level="1" size="xsmall">
				{t.overskrift}
			</Heading>
			<div className="flex gap-4 mt-1">
				<Tabs defaultValue="voiceover" size="small" className="pt-2">
					<Tabs.List>
						<Tabs.Tab
							value="voiceover"
							label="VoiceOver"
							icon={<FigureIcon aria-hidden />}
						/>
						<Tabs.Tab
							value="narrator"
							label="Narrator"
							icon={<RobotSmileIcon aria-hidden />}
						/>
					</Tabs.List>
					<Tabs.Panel value="voiceover">
						<List size="small">
							{t.voiceover.kommandoer.map((kommando) => (
								<ListItem
									key={kommando.label}
									label={kommando.label}
									value={kommando.value}
								/>
							))}
						</List>
					</Tabs.Panel>
					<Tabs.Panel value="narrator">
						<List size="small">
							{t.narrator.kommandoer.map((kommando) => (
								<ListItem
									key={kommando.label}
									label={kommando.label}
									value={kommando.value}
								/>
							))}
						</List>
					</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	)
}

interface ListItemProps {
	label: string
	value: string
}
const ListItem = ({ label, value }: ListItemProps) => (
	<List.Item>
		<strong className="mr-2">{`${label}:`}</strong>
		{value}
	</List.Item>
)