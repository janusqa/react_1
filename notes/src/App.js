import React from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import { data } from './data';
import Split from 'react-split';
import { nanoid } from 'nanoid';
import useLocalStorage from './useLocalStorage';

export default function App() {
    const [notes, setNotes] = useLocalStorage('notes', []);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    );

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        const newNotes = [];
        notes.forEach((note) => {
            if (note.id === currentNoteId) {
                newNotes.unshift({ ...note, body: text });
            } else {
                newNotes.push({ ...note });
            }
        });
        setNotes(newNotes);
    }

    function deleteNote(e, noteId) {
        e.stopPropagation();
        setNotes(notes.filter((note) => note.id !== noteId));
    }

    function findCurrentNote() {
        return (
            notes.find((note) => {
                return note.id === currentNoteId;
            }) || notes[0]
        );
    }

    return (
        <main>
            {notes.length > 0 ? (
                <Split
                    sizes={[30, 70]}
                    direction="horizontal"
                    className="split"
                >
                    <Sidebar
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />
                    {currentNoteId && notes.length > 0 && (
                        <Editor
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />
                    )}
                </Split>
            ) : (
                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button className="first-note" onClick={createNewNote}>
                        Create one now
                    </button>
                </div>
            )}
        </main>
    );
}
